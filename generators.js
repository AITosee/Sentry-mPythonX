'use strict';
goog.provide('Blockly.Python.VisionSensor');
goog.require('Blockly.Python');

// 初始化 Sentry
Blockly.Python['SentryBegin'] = function (block) {
  var sentry = block.getFieldValue('sentry');  
  var InitType = block.getFieldValue('InitType');
  var code = 'sentry' + '.begin(' + InitType + ')\n';

  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  Blockly.Python.functions_['init_Sentry' + sentry] = 'sentry' + ' = Sentry2(0x6' + sentry + ')';

  return code;
};

// 恢复默认设置
Blockly.Python['SentrySetDefault'] = function (block) {
  
  var code = 'sentry' + '.SensorSetDefault()\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置
Blockly.Python['SeneorSetCoordinateType'] = function (block) {
  
  var coordinate = block.getFieldValue('CoordinateType')|0;
  var code = 'sentry' + `.SeneorSetCoordinateType(${coordinate})\n`;

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 算法类型
Blockly.Python['SentryVisionType'] = function (block) {
  var code = block.getFieldValue('VisionType');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 启用算法
Blockly.Python['SentryVisionSetStatus'] = function (block) {
  
  var VisionStatus = block.getFieldValue('VisionStatus');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var code = 'sentry' + '.Vision' + VisionStatus + '(' + VisionType + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置算法参数
Blockly.Python['SentrySetParamNum'] = function (block) {
  
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var max_num = Blockly.Python.valueToCode(block, "max_num", Blockly.Python.ORDER_NONE);
  var code = 'sentry' + '.SetParamNum(' + VisionType + ', ' + max_num + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// Color 算法参数
Blockly.Python['SentryColorParam'] = function (block) {
  var x = Blockly.Python.valueToCode(block, "x", Blockly.Python.ORDER_NONE) || '1';
  var y = Blockly.Python.valueToCode(block, "y", Blockly.Python.ORDER_NONE) || '1';
  var w = Blockly.Python.valueToCode(block, "w", Blockly.Python.ORDER_NONE) || '1';
  var h = Blockly.Python.valueToCode(block, "h", Blockly.Python.ORDER_NONE) || '1';

  var code = 'sentry_vision_e.kVisionColor, [' + x + ', ' + y + ', ' + w + ', ' + h + ', 0]';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


// Blod 算法参数
Blockly.Python['SentryBlodParam'] = function (block) {
  var w = Blockly.Python.valueToCode(block, "w", Blockly.Python.ORDER_NONE) || '1';
  var h = Blockly.Python.valueToCode(block, "h", Blockly.Python.ORDER_NONE) || '1';
  var lable = block.getFieldValue('lable');

  var code = 'sentry_vision_e.kVisionBlob, ' + '[0, 0, ' + w + ', ' + h + ', ' + lable + ']';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Face 算法参数
Blockly.Python['SentryFaceParam'] = function (block) {

  var l = Blockly.Python.valueToCode(block, "l", Blockly.Python.ORDER_NONE) || '0';

  var code = 'sentry_vision_e.kVisionFace, ' + '[0, 0, 0, 0, ' + l + ']';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 设置 算法参数
Blockly.Python['SentrySetParam'] = function (block) {

  
  var prama = Blockly.Python.valueToCode(block, "prama", Blockly.Python.ORDER_ATOMIC);
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_ATOMIC);
  var code = 'sentry' + '.SetParam(' + prama + ', ' + objid + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置 LCD
Blockly.Python['SentryLcdSetMode'] = function (block) {

  
  var lcd_sw = block.getFieldValue('lcd_sw');
  var code = 'sentry' + '.LcdSetMode(' + lcd_sw + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置 LED
Blockly.Python['SentryLedSetColor'] = function (block) {

  
  var detected_color = block.getFieldValue('detected_color');
  var undetected_color = block.getFieldValue('undetected_color');
  var level = Blockly.Python.valueToCode(block, "level", Blockly.Python.ORDER_NONE) || '1';
  var code = 'sentry' + '.LedSetColor(' + detected_color + ', ' + undetected_color + ', ' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['SentryCameraSetZoom'] = function (block) {

  
  var zoomLevel = block.getFieldValue('ZoomLevel');

  var code = 'sentry' + '.CameraSetZoom(' + zoomLevel + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['SentryCameraSetRotate'] = function (block) {

  
  var rotate = block.getFieldValue('rotate');

  var code = 'sentry' + '.CameraSetRotate(' + rotate + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['SentryCameraSetAwb'] = function (block) {

  
  var awb = block.getFieldValue('awb');

  var code = 'sentry' + '.CameraSetAwb(' + awb + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['SentryCameraSetFPS'] = function (block) {

  
  var fps = block.getFieldValue('fps');

  var code = 'sentry' + '.CameraSetFPS(' + fps + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['SentryCameraSetBrightness'] = function (block) {

  
  var level = block.getFieldValue('level');

  var code = 'sentry' + '.CameraSetBrightness(' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['SentryCameraSetContrast'] = function (block) {

  
  var level = block.getFieldValue('level');

  var code = 'sentry' + '.CameraSetContrast(' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['SentryCameraSetSaturation'] = function (block) {

  
  var level = block.getFieldValue('level');

  var code = 'sentry' + '.CameraSetSaturation(' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['SentryCameraSetShaprness'] = function (block) {

  
  var level = block.getFieldValue('level');

  var code = 'sentry' + '.CameraSetShaprness(' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['SentryUartSetBaudrate'] = function (block) {

  
  var buad = block.getFieldValue('buad');

  var code = 'sentry' + '.UartSetBaudrate(' + buad + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  Blockly.Python.functions_['init_Sentry' + sentry] = 'sentry' + ' = Sentry2(0x6' + sentry + ')';

  return code;
};

Blockly.Python['SentryDetected'] = function (block) {
  
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var code = 'sentry' + '.GetValue(' + VisionType + ', sentry_obj_info_e.kStatus)';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryGetValue'] = function (block) {
  
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var objinfo = block.getFieldValue('objinfo');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';
  var code = 'sentry' + '.GetValue(' + VisionType + ', ' + objinfo + ', ' + objid + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryColorRcgValue'] = function (block) {
  
  var objinfo = block.getFieldValue('objinfo');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';
  var code = 'sentry' + '.GetValue(sentry_vision_e.kVisionColor, ' + objinfo + ', ' + objid + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryQrRcgValue'] = function (block) {
  
  var objinfo = block.getFieldValue('objinfo');
  var code = 'sentry' + '.GetValue(sentry_vision_e.kVisionQrCode, ' + objinfo + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['SentryGetQrCodeValue'] = function (block) {
  
  var code = 'sentry' + '.GetQrCodeValue()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryDetectedColor'] = function (block) {
  
  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry_vision_e.kVisionColor, sentry_obj_info_e.kLabel, ' + objid + ') == ' + ColorLabel + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryDetectedBlob'] = function (block) {
  
  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry_vision_e.kVisionBlob, sentry_obj_info_e.kLabel, ' + objid + ') == ' + ColorLabel + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryDetectedCard'] = function (block) {
  
  var card = block.getFieldValue('card');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry_vision_e.kVisionCard, sentry_obj_info_e.kLabel, ' + objid + ') == ' + card + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['SentryDetected20Class'] = function (block) {
  
  var card = block.getFieldValue('card');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry_vision_e.kVision20Classes, sentry_obj_info_e.kLabel, ' + objid + ') == ' + card + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['SentryGetQrCodeValue'] = function (block) {
  
  var code = 'sentry' + '.GetQrCodeValue()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['SentryRows'] = function (block) {
  
  var code = 'sentry' + '.Rows()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['SentryCols'] = function (block) {
  
  var code = 'sentry' + '.Cols()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};