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

Blockly.Python['SentryCameraSetZoom'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var ZoomLevel = block.getFieldValue('ZoomLevel');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.CameraSetZoom(' + ZoomLevel + ')\n';
	return code;
};

Blockly.Python['SentrySetUARTBaud'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var UARTBaud = block.getFieldValue('UARTBaud');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.UartSetBaudrate(' + UARTBaud + ')\n';
	return code;
};

Blockly.Python['SentrySetCameraWhiteBalance'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var WhiteBalance = block.getFieldValue('WhiteBalance');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.CameraSetAwb(' + WhiteBalance + ')\n';
	return code;
};

Blockly.Python['SentrySetCameraHFR'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var CameraHFR = block.getFieldValue('CameraHFR') == 'TRUE';
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = '';
  if (CameraHFR) {
    code = 'sentry' + sentry + '.CameraSetFPS(FPSHigh)\n';
  } else {
    code = 'sentry' + sentry + '.CameraSetFPS(FPSNormal)\n';
  }
	return code;
};

Blockly.Python['SentryGetDetectedStatus'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.GetValue(' + VisionType + ', Status)';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryGetColorRCGLabel'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  Blockly.Python.definitions_['x_last_y_last'] = 'x_last = -1\ny_last = -1\n';
  Blockly.Python.functions_['sentry' + sentry + 'SentryGetColorRCGLabel'] = ''
  + 'def sentry' + sentry + 'SentryGetColorRCGLabel(x, y):\n'
  + '    global x_last, y_last\n'
  + '    if (x > 100):\n'
  + '        x = 100\n'
  + '    if (x < 0):\n'
  + '        x = 0\n'
  + '    if (y > 100):\n'
  + '        y = 100\n'
  + '    if (y < 0):\n'
  + '        y = 0\n'
  + '    if x != x_last:\n'
  + '        x_last = x\n'
  + '        sentry' + sentry + '.SetValue(VISION_COLOR_RECOGNITION, XValue, x)\n'
  + '    if y != y_last:\n'
  + '        y_last = y\n'
  + '        sentry' + sentry + '.SetValue(VISION_COLOR_RECOGNITION, YValue, y)\n'
  + '    return sentry' + sentry + '.GetValue(VISION_COLOR_RECOGNITION, Status)';
  var code = 'sentry' + sentry + 'SentryGetColorRCGLabel(' + x + ', ' + y + ')'
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryGetMessageColor'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var StateValue = block.getFieldValue('StateValue');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.GetValue(VISION_COLOR_RECOGNITION, ' + StateValue + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryGetMessage'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var StateValue = block.getFieldValue('StateValue');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = 'sentry' + sentry + '.GetValue(' + VisionType + ', ' + StateValue + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryDetectedColorDetect'] = function (block) {
  // var color_dic = {'#000000':'MU_COLOR_BLACK',  '#ff0000':'MU_COLOR_RED',  '#00ff00':'MU_COLOR_GREEN',
  //                  '#ffff00':'MU_COLOR_YELLOW', '#0000ff':'MU_COLOR_BLUE', '#ff00ff':'MU_COLOR_PURPLE',
  //                  '#00ffff':'MU_COLOR_CYAN',   '#ffffff':'MU_COLOR_WHITE'};
  var sentry = block.getFieldValue('sentry');
  // var ColorLabel = color_dic[this.getFieldValue("ColorLabel")];
  var ColorLabel = block.getFieldValue('ColorLabel');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  Blockly.Python.definitions_['label_last'] = 'label_last = -1\n';
  Blockly.Python.functions_['sentry' + sentry + 'SentryGetColorDetectLabel'] = ''
  + 'def sentry' + sentry + 'SentryGetColorDetectLabel(label):\n'
  + '    global label_last\n'
  + '    if (label_last != label):\n'
  + '        label_last = label\n'
  + '        sentry' + sentry + '.SetValue(VISION_COLOR_DETECT, Label, label)\n'
  + '    return sentry' + sentry + '.GetValue(VISION_COLOR_DETECT, Status)\n';
  var code = 'sentry' + sentry + 'SentryGetColorDetectLabel(' + ColorLabel + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryGetColorLabel'] = function (block) {
  // var color_dic = {'#000000':'MU_COLOR_BLACK',  '#ff0000':'MU_COLOR_RED',  '#00ff00':'MU_COLOR_GREEN',
  //                  '#ffff00':'MU_COLOR_YELLOW', '#0000ff':'MU_COLOR_BLUE', '#ff00ff':'MU_COLOR_PURPLE',
  //                  '#00ffff':'MU_COLOR_CYAN',   '#ffffff':'MU_COLOR_WHITE'};
  var sentry = block.getFieldValue('sentry');
  // var ColorLabel = color_dic[this.getFieldValue("ColorLabel")];
  var ColorLabel = block.getFieldValue('ColorLabel');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = '(sentry' + sentry + '.GetValue(VISION_COLOR_RECOGNITION, Label) == ' + ColorLabel + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryGetShapeCardType'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var ShapeCardType = block.getFieldValue('ShapeCardType');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = '(sentry' + sentry + '.GetValue(VISION_SHAPE_CARD_DETECT, Label) == ' + ShapeCardType + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryGetTrafficCardType'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var TrafficCardType = block.getFieldValue('TrafficCardType');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = '(sentry' + sentry + '.GetValue(VISION_TRAFFIC_CARD_DETECT, Label) == ' + TrafficCardType + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryGetNumCardType'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var NumCardType = block.getFieldValue('NumCardType');
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  var code = '(sentry' + sentry + '.GetValue(VISION_NUM_CARD_DETECT, Label) == ' + NumCardType + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};