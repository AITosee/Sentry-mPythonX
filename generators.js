'use strict';
goog.provide('Blockly.Python.VisionSensor');
goog.require('Blockly.Python');

var Mu3AtPort = '';

// 初始化 MU
Blockly.Python['Vs2MuInit'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var InitType = block.getFieldValue('InitType');
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  Blockly.Python.functions_['init_MuVisionSensor' + lVsMu] = 'mu' + lVsMu + ' = MuVisionSensor(0x6' + lVsMu + ')';
  var code = 'mu' + lVsMu + '.begin(' + InitType + ')\n';
  // if (InitType != "I2C") {
  //   code = 'mu' + lVsMu + '.begin(' + InitType + ')\n';
  // } else {
  //   code = 'mu' + lVsMu + '.begin()\n';
  // }
	return code;
};

// 恢复默认设置
Blockly.Python['Vs2Reset'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.SensorSetDefault()\n';
	return code;
};

// 算法类型
Blockly.Python['Vs2VisionType'] = function (block) {
  var code = block.getFieldValue('VisionType');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 启用算法
Blockly.Python['Vs2VisionBegin'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var VisionStatus = block.getFieldValue('VisionStatus');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.Vision' + VisionStatus + '(' + VisionType + ')\n';
	return code;
};

// 设置 LED
Blockly.Python['Vs2SetLEDColor'] = function (block) {
  // var color_dic = {'#000000': 'LedClose',  '#ff0000': 'LedRed',  '#00ff00': 'LedGreen',
  //                  '#ffff00': 'LedYellow', '#0000ff': 'LedBlue', '#ff00ff': 'LedPurple',
  //                  '#00ffff': 'LedCyan',   '#ffffff': 'LedWhite'};
  var lVsMu = block.getFieldValue('lVsMu');
  var led_id = block.getFieldValue('led_id');
  var level = Blockly.Python.valueToCode(block, "level", Blockly.Python.ORDER_NONE) || '1';
  // var detected_color = color_dic[this.getFieldValue('detected_color')];
  // var undetected_color = color_dic[this.getFieldValue('undetected_color')];
  var detected_color = block.getFieldValue('detected_color');
  var undetected_color = block.getFieldValue('undetected_color');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.LedSetColor(' + led_id + ', ' + detected_color + ', ' + undetected_color + ', ' + level + ')\n';
  if (detected_color == undetected_color) {
    code += 'mu' + lVsMu + '.LedSetMode(' + led_id + ', 1, 1)\n';
  } else {
    code += 'mu' + lVsMu + '.LedSetMode(' + led_id + ', 0, 0)\n';
  }
	return code;
};

Blockly.Python['Vs2SetVisionLevel'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var VisionLevel = block.getFieldValue('VisionLevel');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.VisionSetLevel(' + VisionType + ', ' + VisionLevel + ')\n';
	return code;
};

Blockly.Python['Vs2SetColorRecognitionRegion'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var width = Blockly.Python.valueToCode(block, "Width", Blockly.Python.ORDER_NONE) || '5';
  var height = Blockly.Python.valueToCode(block, "Height", Blockly.Python.ORDER_NONE) || '5';
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.SetValue(VISION_COLOR_RECOGNITION, WidthValue, ' + width + ')\n' + 'mu' + lVsMu + '.SetValue(VISION_COLOR_RECOGNITION, HeightValue, ' + height + ')\n';
	return code;
};

Blockly.Python['Vs2SetColorBlockMinBlob'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var width = Blockly.Python.valueToCode(block, "Width", Blockly.Python.ORDER_NONE) || '5';
  var height = Blockly.Python.valueToCode(block, "Height", Blockly.Python.ORDER_NONE) || '5';
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.SetValue(VISION_COLOR_DETECT, WidthValue, ' + width + ')\n' + 'mu' + lVsMu + '.SetValue(VISION_COLOR_DETECT, HeightValue, ' + height + ')\n';
	return code;
};

Blockly.Python['Vs2SetVisionZoom'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var ZoomLevel = block.getFieldValue('ZoomLevel');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.CameraSetZoom(' + ZoomLevel + ')\n';
	return code;
};

Blockly.Python['Vs2SetUARTBaud'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var UARTBaud = block.getFieldValue('UARTBaud');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.UartSetBaudrate(' + UARTBaud + ')\n';
	return code;
};

Blockly.Python['Vs2SetCameraWhiteBalance'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var WhiteBalance = block.getFieldValue('WhiteBalance');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.CameraSetAwb(' + WhiteBalance + ')\n';
	return code;
};

Blockly.Python['Vs2SetCameraHFR'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var CameraHFR = block.getFieldValue('CameraHFR') == 'TRUE';
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = '';
  if (CameraHFR) {
    code = 'mu' + lVsMu + '.CameraSetFPS(FPSHigh)\n';
  } else {
    code = 'mu' + lVsMu + '.CameraSetFPS(FPSNormal)\n';
  }
	return code;
};

Blockly.Python['Vs2GetDetectedStatus'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.GetValue(' + VisionType + ', Status)';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Vs2GetColorRCGLabel'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  Blockly.Python.definitions_['x_last_y_last'] = 'x_last = -1\ny_last = -1\n';
  Blockly.Python.functions_['mu' + lVsMu + 'Vs2GetColorRCGLabel'] = ''
  + 'def mu' + lVsMu + 'Vs2GetColorRCGLabel(x, y):\n'
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
  + '        mu' + lVsMu + '.SetValue(VISION_COLOR_RECOGNITION, XValue, x)\n'
  + '    if y != y_last:\n'
  + '        y_last = y\n'
  + '        mu' + lVsMu + '.SetValue(VISION_COLOR_RECOGNITION, YValue, y)\n'
  + '    return mu' + lVsMu + '.GetValue(VISION_COLOR_RECOGNITION, Status)';
  var code = 'mu' + lVsMu + 'Vs2GetColorRCGLabel(' + x + ', ' + y + ')'
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Vs2GetMessageColor'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var StateValue = block.getFieldValue('StateValue');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.GetValue(VISION_COLOR_RECOGNITION, ' + StateValue + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Vs2GetMessage'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var VisionType = Blockly.Python.valueToCode(block, 'VisionType', Blockly.Python.ORDER_ATOMIC);
  var StateValue = block.getFieldValue('StateValue');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = 'mu' + lVsMu + '.GetValue(' + VisionType + ', ' + StateValue + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Vs2DetectedColorDetect'] = function (block) {
  // var color_dic = {'#000000':'MU_COLOR_BLACK',  '#ff0000':'MU_COLOR_RED',  '#00ff00':'MU_COLOR_GREEN',
  //                  '#ffff00':'MU_COLOR_YELLOW', '#0000ff':'MU_COLOR_BLUE', '#ff00ff':'MU_COLOR_PURPLE',
  //                  '#00ffff':'MU_COLOR_CYAN',   '#ffffff':'MU_COLOR_WHITE'};
  var lVsMu = block.getFieldValue('lVsMu');
  // var ColorLabel = color_dic[this.getFieldValue("ColorLabel")];
  var ColorLabel = block.getFieldValue('ColorLabel');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  Blockly.Python.definitions_['label_last'] = 'label_last = -1\n';
  Blockly.Python.functions_['mu' + lVsMu + 'Vs2GetColorDetectLabel'] = ''
  + 'def mu' + lVsMu + 'Vs2GetColorDetectLabel(label):\n'
  + '    global label_last\n'
  + '    if (label_last != label):\n'
  + '        label_last = label\n'
  + '        mu' + lVsMu + '.SetValue(VISION_COLOR_DETECT, Label, label)\n'
  + '    return mu' + lVsMu + '.GetValue(VISION_COLOR_DETECT, Status)\n';
  var code = 'mu' + lVsMu + 'Vs2GetColorDetectLabel(' + ColorLabel + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Vs2GetColorLabel'] = function (block) {
  // var color_dic = {'#000000':'MU_COLOR_BLACK',  '#ff0000':'MU_COLOR_RED',  '#00ff00':'MU_COLOR_GREEN',
  //                  '#ffff00':'MU_COLOR_YELLOW', '#0000ff':'MU_COLOR_BLUE', '#ff00ff':'MU_COLOR_PURPLE',
  //                  '#00ffff':'MU_COLOR_CYAN',   '#ffffff':'MU_COLOR_WHITE'};
  var lVsMu = block.getFieldValue('lVsMu');
  // var ColorLabel = color_dic[this.getFieldValue("ColorLabel")];
  var ColorLabel = block.getFieldValue('ColorLabel');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = '(mu' + lVsMu + '.GetValue(VISION_COLOR_RECOGNITION, Label) == ' + ColorLabel + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Vs2GetShapeCardType'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var ShapeCardType = block.getFieldValue('ShapeCardType');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = '(mu' + lVsMu + '.GetValue(VISION_SHAPE_CARD_DETECT, Label) == ' + ShapeCardType + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Vs2GetTrafficCardType'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var TrafficCardType = block.getFieldValue('TrafficCardType');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = '(mu' + lVsMu + '.GetValue(VISION_TRAFFIC_CARD_DETECT, Label) == ' + TrafficCardType + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Vs2GetNumCardType'] = function (block) {
  var lVsMu = block.getFieldValue('lVsMu');
  var NumCardType = block.getFieldValue('NumCardType');
  Blockly.Python.definitions_['import_MuVisionSensor'] = 'from MuVisionSensor import *';
  var code = '(mu' + lVsMu + '.GetValue(VISION_NUM_CARD_DETECT, Label) == ' + NumCardType + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};