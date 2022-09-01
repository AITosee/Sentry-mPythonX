'use strict';
goog.provide('Blockly.Python.VisionSensor');
goog.require('Blockly.Python');


// 初始化 Sentry
Blockly.Python['Sentry1Begin'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var InitType = block.getFieldValue('InitType');
  var code = 'sentry1' + '.begin(' + InitType + ')\n';

  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  Blockly.Python.functions_['init_Sentry1_' + sentry] = 'sentry1' + ' = Sentry1(0x6' + sentry + ')';

  return code;
};

// 恢复默认设置
Blockly.Python['Sentry1SetDefault'] = function (block) {

  var code = 'sentry1' + '.SensorSetDefault()\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 算法类型
Blockly.Python['Sentry1VisionType'] = function (block) {
  var code = block.getFieldValue('VisionType');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 启用算法
Blockly.Python['Sentry1VisionSetStatus'] = function (block) {

  var VisionStatus = block.getFieldValue('VisionStatus');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var code = 'sentry1' + '.Vision' + VisionStatus + '(' + VisionType + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};
// 设置算法参数
Blockly.Python['Sentry1SetParamNum'] = function (block) {

  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var max_num = Blockly.Python.valueToCode(block, "max_num", Blockly.Python.ORDER_NONE);
  var code = 'sentry1' + '.SetParamNum(' + VisionType + ', ' + max_num + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// Color 算法参数
Blockly.Python['Sentry1SetColorParam'] = function (block) {
  var x = Blockly.Python.valueToCode(block, "x", Blockly.Python.ORDER_NONE) || '1';
  var y = Blockly.Python.valueToCode(block, "y", Blockly.Python.ORDER_NONE) || '1';
  var w = Blockly.Python.valueToCode(block, "w", Blockly.Python.ORDER_NONE) || '1';
  var h = Blockly.Python.valueToCode(block, "h", Blockly.Python.ORDER_NONE) || '1';
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = 'sentry1' + '.SetParam(' + 'sentry1_vision_e.kVisionColor, [' + x + ', ' + y + ', ' + w + ', ' + h + ', 0]'  + ', ' + objid + ')\n';

  return code;
};


// Blod 算法参数
Blockly.Python['Sentry1SetBlodParam'] = function (block) {
  var w = Blockly.Python.valueToCode(block, "w", Blockly.Python.ORDER_NONE) || '1';
  var h = Blockly.Python.valueToCode(block, "h", Blockly.Python.ORDER_NONE) || '1';
  var lable = block.getFieldValue('lable');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = 'sentry1' + '.SetParam(' + 'sentry1_vision_e.kVisionBlob, ' + '[0, 0, ' + w + ', ' + h + ', ' + lable + ']'  + ', ' + objid + ')\n';

  return code;
};
// 设置 LEDn
Blockly.Python['Sentry1LedSetColor'] = function (block) {


  var detected_color = block.getFieldValue('detected_color');
  var undetected_color = block.getFieldValue('undetected_color');
  var level = Blockly.Python.valueToCode(block, "level", Blockly.Python.ORDER_NONE) || '1';
  var code = 'sentry1' + '.LedSetColor(' + detected_color + ', ' + undetected_color + ', ' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry1CameraSetZoom'] = function (block) {


  var zoomLevel = block.getFieldValue('ZoomLevel');

  var code = 'sentry1' + '.CameraSetZoom(' + zoomLevel + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry1CameraSetRotate'] = function (block) {


  var rotate = block.getFieldValue('rotate');

  var code = 'sentry1' + '.CameraSetRotate(' + rotate + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry1CameraSetAwb'] = function (block) {


  var awb = block.getFieldValue('awb');

  var code = 'sentry1' + '.CameraSetAwb(' + awb + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry1CameraSetFPS'] = function (block) {


  var fps = block.getFieldValue('fps');

  var code = 'sentry1' + '.CameraSetFPS(' + fps + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry1UartSetBaudrate'] = function (block) {


  var buad = block.getFieldValue('buad');

  var code = 'sentry1' + '.UartSetBaudrate(' + buad + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  Blockly.Python.functions_['init_Sentry' + sentry] = 'sentry' + ' = Sentry2(0x6' + sentry + ')';

  return code;
};

Blockly.Python['Sentry1Detected'] = function (block) {

  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var code = 'sentry1' + '.GetValue(' + VisionType + ', sentry_obj_info_e.kStatus)';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry1GetValue'] = function (block) {

  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var objinfo = block.getFieldValue('objinfo');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';
  var code = 'sentry1' + '.GetValue(' + VisionType + ', ' + objinfo  + ', ' + objid + ')'

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry1ColorRcgValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';
  var code = 'sentry1' + '.GetValue(sentry1_vision_e.kVisionColor, ' + objinfo  + ', ' + objid + ')'

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry1LineValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';
  var code = 'sentry1' + '.GetValue(sentry1_vision_e.kVisionLine, ' + objinfo  + ', ' + objid + ')'

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry1DetectedColor'] = function (block) {

  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry1' + '.GetValue(sentry1_vision_e.kVisionColor, sentry_obj_info_e.kLabel' + ', ' + objid+') == ' + ColorLabel + ')'

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry1DetectedBlob'] = function (block) {

  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry1' + '.GetValue(sentry1_vision_e.kVisionBlob, sentry_obj_info_e.kLabel' + ', ' + objid +') == ' + ColorLabel  + ')'

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry1DetectedCard'] = function (block) {

  var card = block.getFieldValue('card');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry1' + '.GetValue(sentry1_vision_e.kVisionCard, sentry_obj_info_e.kLabel' + ', ' + objid +') == ' + card + ')'

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry1DetectedBall'] = function (block) {

  var card = block.getFieldValue('card');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry1' + '.GetValue(sentry1_vision_e.kVisionBall, sentry_obj_info_e.kLabel' + ', ' + objid +') == ' + card + ')'

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry1Rows'] = function (block) {

  var code = 'sentry1' + '.Rows()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry1Cols'] = function (block) {

  var code = 'sentry1' + '.Cols()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


// 初始化 Sentry
Blockly.Python['Sentry2Begin'] = function (block) {
  var sentry = block.getFieldValue('sentry');
  var InitType = block.getFieldValue('InitType');
  var code = 'sentry' + '.begin(' + InitType + ')\n';

  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  Blockly.Python.functions_['init_Sentry' + sentry] = 'sentry' + ' = Sentry2(0x6' + sentry + ')';

  return code;
};

// 恢复默认设置
Blockly.Python['Sentry2SetDefault'] = function (block) {

  var code = 'sentry' + '.SensorSetDefault()\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置
Blockly.Python['Sentry2SetCoordinateType'] = function (block) {

  var coordinate = block.getFieldValue('CoordinateType') | 0;
  var code = 'sentry' + `.SeneorSetCoordinateType(${coordinate})\n`;

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 算法类型
Blockly.Python['Sentry2VisionType'] = function (block) {
  var code = block.getFieldValue('VisionType');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 启用算法
Blockly.Python['Sentry2VisionSetStatus'] = function (block) {

  var VisionStatus = block.getFieldValue('VisionStatus');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var code = 'sentry' + '.Vision' + VisionStatus + '(' + VisionType + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置算法参数
Blockly.Python['Sentry2SetParamNum'] = function (block) {

  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var max_num = Blockly.Python.valueToCode(block, "max_num", Blockly.Python.ORDER_NONE);
  var code = 'sentry' + '.SetParamNum(' + VisionType + ', ' + max_num + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// Color 算法参数
Blockly.Python['Sentry2SetColorParam'] = function (block) {
  var x = Blockly.Python.valueToCode(block, "x", Blockly.Python.ORDER_NONE) || '1';
  var y = Blockly.Python.valueToCode(block, "y", Blockly.Python.ORDER_NONE) || '1';
  var w = Blockly.Python.valueToCode(block, "w", Blockly.Python.ORDER_NONE) || '1';
  var h = Blockly.Python.valueToCode(block, "h", Blockly.Python.ORDER_NONE) || '1';
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_ATOMIC);
  var code = 'sentry' + '.SetParam(' + 'sentry2_vision_e.kVisionColor, [' + x + ', ' + y + ', ' + w + ', ' + h + ', 0]' + ', ' + objid + ')\n';

  return code;
};


// Blod 算法参数
Blockly.Python['Sentry2SetBlodParam'] = function (block) {
  var w = Blockly.Python.valueToCode(block, "w", Blockly.Python.ORDER_NONE) || '1';
  var h = Blockly.Python.valueToCode(block, "h", Blockly.Python.ORDER_NONE) || '1';
  var lable = block.getFieldValue('lable');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_ATOMIC);
  var code = 'sentry' + '.SetParam(' + 'sentry2_vision_e.kVisionBlob, ' + '[0, 0, ' + w + ', ' + h + ', ' + lable + ']' + ', ' + objid + ')\n';

  return code;
};

// 设置 LCD
Blockly.Python['Sentry2LcdSetMode'] = function (block) {


  var lcd_sw = block.getFieldValue('lcd_sw');
  var code = 'sentry' + '.LcdSetMode(' + lcd_sw + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

// 设置 LED
Blockly.Python['Sentry2LedSetColor'] = function (block) {


  var detected_color = block.getFieldValue('detected_color');
  var undetected_color = block.getFieldValue('undetected_color');
  var level = Blockly.Python.valueToCode(block, "level", Blockly.Python.ORDER_NONE) || '1';
  var code = 'sentry' + '.LedSetColor(' + detected_color + ', ' + undetected_color + ', ' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry2CameraSetZoom'] = function (block) {


  var zoomLevel = block.getFieldValue('ZoomLevel');

  var code = 'sentry' + '.CameraSetZoom(' + zoomLevel + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry2CameraSetRotate'] = function (block) {


  var rotate = block.getFieldValue('rotate');

  var code = 'sentry' + '.CameraSetRotate(' + rotate + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry2CameraSetAwb'] = function (block) {


  var awb = block.getFieldValue('awb');

  var code = 'sentry' + '.CameraSetAwb(' + awb + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry2CameraSetFPS'] = function (block) {


  var fps = block.getFieldValue('fps');

  var code = 'sentry' + '.CameraSetFPS(' + fps + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry2CameraSetBrightness'] = function (block) {


  var level = block.getFieldValue('level');

  var code = 'sentry' + '.CameraSetBrightness(' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry2CameraSetContrast'] = function (block) {


  var level = block.getFieldValue('level');

  var code = 'sentry' + '.CameraSetContrast(' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry2CameraSetSaturation'] = function (block) {


  var level = block.getFieldValue('level');

  var code = 'sentry' + '.CameraSetSaturation(' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry2CameraSetShaprness'] = function (block) {


  var level = block.getFieldValue('level');

  var code = 'sentry' + '.CameraSetShaprness(' + level + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return code;
};

Blockly.Python['Sentry2UartSetBaudrate'] = function (block) {


  var buad = block.getFieldValue('buad');

  var code = 'sentry' + '.UartSetBaudrate(' + buad + ')\n';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';
  Blockly.Python.functions_['init_Sentry' + sentry] = 'sentry' + ' = Sentry2(0x6' + sentry + ')';

  return code;
};

Blockly.Python['Sentry2Detected'] = function (block) {

  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var code = 'sentry' + '.GetValue(' + VisionType + ', sentry_obj_info_e.kStatus)';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry2GetValue'] = function (block) {

  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var objinfo = block.getFieldValue('objinfo');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';
  var code = 'sentry' + '.GetValue(' + VisionType + ', ' + objinfo + ', ' + objid + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry2ColorRcgValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';
  var code = 'sentry' + '.GetValue(sentry2_vision_e.kVisionColor, ' + objinfo + ', ' + objid + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry2QrRcgValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var code = 'sentry' + '.GetValue(sentry2_vision_e.kVisionQrCode, ' + objinfo + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['Sentry2GetQrCodeValue'] = function (block) {

  var code = 'sentry' + '.GetQrCodeValue()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry2LineValue'] = function (block) {

  var objinfo = block.getFieldValue('objinfo');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';
  var code = 'sentry' + '.GetValue(sentry2_vision_e.kVisionLine, ' + objinfo  + ', ' + objid + ')'

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry2DetectedColor'] = function (block) {

  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry2_vision_e.kVisionColor, sentry_obj_info_e.kLabel, ' + objid + ') == ' + ColorLabel + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry2DetectedBlob'] = function (block) {

  var ColorLabel = block.getFieldValue('ColorLabel');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry2_vision_e.kVisionBlob, sentry_obj_info_e.kLabel, ' + objid + ') == ' + ColorLabel + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry2DetectedCard'] = function (block) {

  var card = block.getFieldValue('card');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry2_vision_e.kVisionCard, sentry_obj_info_e.kLabel, ' + objid + ') == ' + card + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['Sentry2Detected20Class'] = function (block) {

  var card = block.getFieldValue('card');
  var objid = Blockly.Python.valueToCode(block, "objid", Blockly.Python.ORDER_NONE) || '0';

  var code = '(sentry' + '.GetValue(sentry2_vision_e.kVision20Classes, sentry_obj_info_e.kLabel, ' + objid + ') == ' + card + ')';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['Sentry2GetQrCodeValue'] = function (block) {

  var code = 'sentry' + '.GetQrCodeValue()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['Sentry2Rows'] = function (block) {

  var code = 'sentry' + '.Rows()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Sentry2Cols'] = function (block) {

  var code = 'sentry' + '.Cols()';

  Blockly.Python.definitions_['import_Sentry'] = 'from Sentry import *';

  return [code, Blockly.Python.ORDER_ATOMIC];
};