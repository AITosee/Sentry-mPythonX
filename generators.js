'use strict';
goog.provide('Blockly.Python.VisionSensor');
goog.require('Blockly.Python');

var Mu3AtPort = '';

// 初始化 MU
Blockly.Python['SentryBegin'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var InitType = block.getFieldValue('InitType');
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  Blockly.Python.functions_['init_Sentry' + sentry] = 'sentry' + sentry + ' = Sentry(0x6' + sentry + ')';
  var code = 'sentry' + sentry + '.begin(' + InitType + ')\n';

	return code;
};

// 恢复默认设置
Blockly.Python['SentrySetDefault'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.SensorSetDefault()\n';
	return code;
};

// 算法类型
Blockly.Python['SentryVisionType'] = function (block) {
  var code = block.getFieldValue('VisionType');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 启用算法
Blockly.Python['SentryVisionSetStatus'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var VisionStatus = block.getFieldValue('VisionStatus');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.Vision' + VisionStatus + '(' + VisionType + ')\n';
	return code;
};

Blockly.Python['SentrySetParamNum'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var VisionLevel = block.getFieldValue('VisionLevel');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.VisionSetLevel(' + VisionType + ', ' + VisionLevel + ')\n';
	return code;
};

// 设置 LCD
Blockly.Python['SentryLcdSetMode'] = function (block) {

  var sentry = block.getFieldValue('sentry');
  var lcd_sw = block.getFieldValue('lcd_sw');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  code += 'sentry' + sentry + '.LcdSetMode('+ lcd_sw + ')\n';

	return code;
};

// 设置 LED
Blockly.Python['SentryLedSetColor'] = function (block) {

  var sentry = block.getFieldValue('sentry');
  var level = Blockly.Python.valueToCode(block, "level", Blockly.Python.ORDER_NONE) || '1';
  var detected_color = block.getFieldValue('detected_color');
  var undetected_color = block.getFieldValue('undetected_color');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.LedSetColor(' + led_id + ', ' + detected_color + ', ' + undetected_color + ', ' + level + ')\n';
  if (detected_color == undetected_color) {
    code += 'sentry' + sentry + '.LedSetMode(' + ', 1, 1)\n';
  } else {
    code += 'sentry' + sentry + '.LedSetMode(' + ', 0, 0)\n';
  }
	return code;
};
