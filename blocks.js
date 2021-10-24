'use strict';
goog.provide("Blockly.Blocks.Sentry");
goog.require("Blockly.Blocks");

var Sentry_Color = "#EF5411";
var Sentry_SetupMode_Color = "#EF5411";
var Sentry_RunMode_Color = "#EAA20A";

var sentry = [
  ["SENTRY#0", "0"],
  ["SENTRY#1", "1"],
  ["SENTRY#2", "2"],
  ["SENTRY#3", "3"],
];

// 初始化 SENTRY
Blockly.Blocks["SentryBegin"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "InitType",
          options: [
            ["i2c", "i2c"],
            ["uart1", "uart1"],
            ["uart2", "uart2"],
          ],
          type: "field_dropdown",
        },
      ],
      message0: Blockly.Msg.SENTRY_BEGIN_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      helpUrl: "https://morpx-docs.readthedocs.io/zh_CN/latest/",
      tooltip: Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP,
    });
  },
};

// 恢复默认设置
Blockly.Blocks["SentrySetDefault"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      message0: Blockly.Msg.SENTRY_SET_DEFAULT_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 算法类型
Blockly.Blocks["SentryVisionType"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "sentry_vision_e.kVisionColor"],
            [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "sentry_vision_e.kVisionBlob"],
            [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "sentry_vision_e.kVisionAprilTag"],
            [Blockly.Msg.SENTRY_VISION_VISIONLINE, "sentry_vision_e.kVisionLine"],
            [Blockly.Msg.SENTRY_VISION_VISIONBODY, "sentry_vision_e.kVisionBody"],
            [Blockly.Msg.SENTRY_VISION_VISIONCARD, "sentry_vision_e.kVisionCard"],
            [Blockly.Msg.SENTRY_VISION_VISIONFACE, "sentry_vision_e.kVisionFace"],
            [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "sentry_vision_e.kVision20Classes"],
            [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "sentry_vision_e.kVisionQrCode"],
            [Blockly.Msg.SENTRY_VISION_VISIONOBJTRACK, "sentry_vision_e.kVisionObjTrack"],
            [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "sentry_vision_e.kVisionMotionDetect"],
          ],
          type: "field_dropdown",
        },
      ],
      output: "String",
      message0: "%1",
    });
  },
};

// 启用算法
Blockly.Blocks["SentryVisionSetStatus"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "VisionStatus",
          options: [
            [Blockly.Msg.SENTRY_ENABLE, "Begin"],
            [Blockly.Msg.SENTRY_DISABLE, "End"],
          ],
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
      ],
      message0: Blockly.Msg.SENTRY_VISION_SET_STATUS_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

Blockly.Blocks["SentrySetParamNum"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "Number",
          type: "input_value",
          name: "max_num",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_PARAMNUM_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryColorParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          check: "Number",
          type: "input_value",
          name: "x",
        },
        {
          check: "Number",
          type: "input_value",
          name: "y",
        },
        {
          check: "Number",
          type: "input_value",
          name: "w",
        },
        {
          check: "Number",
          type: "input_value",
          name: "h",
        },
      ],
      output: "String",
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_COLORPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryBlodParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          check: "Number",
          type: "input_value",
          name: "w",
        },
        {
          check: "Number",
          type: "input_value",
          name: "h",
        },
        {
          check: "Number",
          type: "input_value",
          name: "l",
        },
      ],
      output: "String",
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_BOLDPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryFaceParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          check: "Number",
          type: "input_value",
          name: "l",
        },
      ],
      output: "String",
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_FACEPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentrySetParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "prama",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_PARAM_MESSAGE0,
    });
  },
};

// 设置 LCD
Blockly.Blocks["SentryLcdSetMode"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "lcd_sw",
          options: [
            ["ON", "True"],
            ["OFF", "False"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_LCD_SET_MODE_MESSAGE0,
      inputsInline: true,
    });
  },
};

// 设置 LED
Blockly.Blocks["SentryLedSetColor"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "level",
        },
        {
          type: "field_dropdown",
          name: "detected_color",
          options: [
            [Blockly.Msg.SENTRY_LED_CLOSE, "sentry_led_color_e.kLedClose"],
            [Blockly.Msg.SENTRY_LED_RED, "sentry_led_color_e.kLedRed"],
            [Blockly.Msg.SENTRY_LED_GREEN, "sentry_led_color_e.kLedGreen"],
            [Blockly.Msg.SENTRY_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
            [Blockly.Msg.SENTRY_LED_BLUE, "sentry_led_color_e.kLedBlue"],
            [Blockly.Msg.SENTRY_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
            [Blockly.Msg.SENTRY_LED_CYAN, "sentry_led_color_e.kLedCyan"],
            [Blockly.Msg.SENTRY_LED_WHITE, "sentry_led_color_e.kLedWhite"],
          ],
        },
        {
          type: "field_dropdown",
          name: "undetected_color",
          options: [
            [Blockly.Msg.SENTRY_LED_CLOSE, "sentry_led_color_e.kLedClose"],
            [Blockly.Msg.SENTRY_LED_RED, "sentry_led_color_e.kLedRed"],
            [Blockly.Msg.SENTRY_LED_GREEN, "sentry_led_color_e.kLedGreen"],
            [Blockly.Msg.SENTRY_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
            [Blockly.Msg.SENTRY_LED_BLUE, "sentry_led_color_e.kLedBlue"],
            [Blockly.Msg.SENTRY_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
            [Blockly.Msg.SENTRY_LED_CYAN, "sentry_led_color_e.kLedCyan"],
            [Blockly.Msg.SENTRY_LED_WHITE, "sentry_led_color_e.kLedWhite"],
          ],
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_LED_SET_COLOR_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetZoom"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "ZoomLevel",
          options: [
            [Blockly.Msg.SENTRY_ZOOM_DEFAULT, "ZoomDefault"],
            [Blockly.Msg.SENTRY_ZOOM_1, "Zoom1"],
            [Blockly.Msg.SENTRY_ZOOM_2, "Zoom2"],
            [Blockly.Msg.SENTRY_ZOOM_3, "Zoom3"],
            [Blockly.Msg.SENTRY_ZOOM_4, "Zoom4"],
            [Blockly.Msg.SENTRY_ZOOM_5, "Zoom5"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_ZOOM_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryCameraSetRotate"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "rotate",
          options: [
            ["ON", "True"],
            ["OFF", "False"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_ROTATE_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetAwb"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "awb",
          options: [
            [Blockly.Msg.SENTRY_AUTO, "sentry_camera_white_balance_e.kAutoWhiteBalance"],
            [Blockly.Msg.SENTRY_LOCK_AWB, "sentry_camera_white_balance_e.kLockWhiteBalance"],
            [Blockly.Msg.SENTRY_WHITE_LIGHT, "sentry_camera_white_balance_e.kWhiteLight"],
            [Blockly.Msg.SENTRY_YELLOW_LIGHT, "sentry_camera_white_balance_e.kYellowLight"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_AWB_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetFPS"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "fps",
          options: [
            ["ON", "True"],
            ["OFF", "False"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_FPS_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetBrightness"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "level",
          options: [
            [Blockly.Msg.SENTRY_LEVEL_DEFAULT, "sentry_camera_config_e.kLevelDefault"],
            [Blockly.Msg.SENTRY_LEVEL1, "sentry_camera_config_e.kLevel1"],
            [Blockly.Msg.SENTRY_LEVEL2, "sentry_camera_config_e.kLevel2"],
            [Blockly.Msg.SENTRY_LEVEL3, "sentry_camera_config_e.kLevel3"],
            [Blockly.Msg.SENTRY_LEVEL4, "sentry_camera_config_e.kLevel4"],
            [Blockly.Msg.SENTRY_LEVEL5, "sentry_camera_config_e.kLevel5"],
            [Blockly.Msg.SENTRY_LEVEL6, "sentry_camera_config_e.kLevel6"],
            [Blockly.Msg.SENTRY_LEVEL7, "sentry_camera_config_e.kLevel7"],
            [Blockly.Msg.SENTRY_LEVEL8, "sentry_camera_config_e.kLevel8"],
            [Blockly.Msg.SENTRY_LEVEL9, "sentry_camera_config_e.kLevel9"],
            [Blockly.Msg.SENTRY_LEVEL10, "sentry_camera_config_e.kLevel10"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_BRIGHTNESS_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetContrast"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "level",
          options: [
            [Blockly.Msg.SENTRY_LEVEL_DEFAULT, "sentry_camera_config_e.kLevelDefault"],
            [Blockly.Msg.SENTRY_LEVEL1, "sentry_camera_config_e.kLevel1"],
            [Blockly.Msg.SENTRY_LEVEL2, "sentry_camera_config_e.kLevel2"],
            [Blockly.Msg.SENTRY_LEVEL3, "sentry_camera_config_e.kLevel3"],
            [Blockly.Msg.SENTRY_LEVEL4, "sentry_camera_config_e.kLevel4"],
            [Blockly.Msg.SENTRY_LEVEL5, "sentry_camera_config_e.kLevel5"],
            [Blockly.Msg.SENTRY_LEVEL6, "sentry_camera_config_e.kLevel6"],
            [Blockly.Msg.SENTRY_LEVEL7, "sentry_camera_config_e.kLevel7"],
            [Blockly.Msg.SENTRY_LEVEL8, "sentry_camera_config_e.kLevel8"],
            [Blockly.Msg.SENTRY_LEVEL9, "sentry_camera_config_e.kLevel9"],
            [Blockly.Msg.SENTRY_LEVEL10, "sentry_camera_config_e.kLevel10"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_CONTRAST_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetSaturation"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "level",
          options: [
            [Blockly.Msg.SENTRY_LEVEL_DEFAULT, "sentry_camera_config_e.kLevelDefault"],
            [Blockly.Msg.SENTRY_LEVEL1, "sentry_camera_config_e.kLevel1"],
            [Blockly.Msg.SENTRY_LEVEL2, "sentry_camera_config_e.kLevel2"],
            [Blockly.Msg.SENTRY_LEVEL3, "sentry_camera_config_e.kLevel3"],
            [Blockly.Msg.SENTRY_LEVEL4, "sentry_camera_config_e.kLevel4"],
            [Blockly.Msg.SENTRY_LEVEL5, "sentry_camera_config_e.kLevel5"],
            [Blockly.Msg.SENTRY_LEVEL6, "sentry_camera_config_e.kLevel6"],
            [Blockly.Msg.SENTRY_LEVEL7, "sentry_camera_config_e.kLevel7"],
            [Blockly.Msg.SENTRY_LEVEL8, "sentry_camera_config_e.kLevel8"],
            [Blockly.Msg.SENTRY_LEVEL9, "sentry_camera_config_e.kLevel9"],
            [Blockly.Msg.SENTRY_LEVEL10, "sentry_camera_config_e.kLevel10"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_SATURATION_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetShaprness"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "level",
          options: [
            [Blockly.Msg.SENTRY_LEVEL_DEFAULT, "sentry_camera_config_e.kLevelDefault"],
            [Blockly.Msg.SENTRY_LEVEL1, "sentry_camera_config_e.kLevel1"],
            [Blockly.Msg.SENTRY_LEVEL2, "sentry_camera_config_e.kLevel2"],
            [Blockly.Msg.SENTRY_LEVEL3, "sentry_camera_config_e.kLevel3"],
            [Blockly.Msg.SENTRY_LEVEL4, "sentry_camera_config_e.kLevel4"],
            [Blockly.Msg.SENTRY_LEVEL5, "sentry_camera_config_e.kLevel5"],
            [Blockly.Msg.SENTRY_LEVEL6, "sentry_camera_config_e.kLevel6"],
            [Blockly.Msg.SENTRY_LEVEL7, "sentry_camera_config_e.kLevel7"],
            [Blockly.Msg.SENTRY_LEVEL8, "sentry_camera_config_e.kLevel8"],
            [Blockly.Msg.SENTRY_LEVEL9, "sentry_camera_config_e.kLevel9"],
            [Blockly.Msg.SENTRY_LEVEL10, "sentry_camera_config_e.kLevel10"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_SHAPRNESS_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryUartSetBaudrate"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "buad",
          options: [
            ["9600", "sentry_baudrate_e.kBaud9600"],
            ["19200", "sentry_baudrate_e.kBaud19200"],
            ["38400", "sentry_baudrate_e.kBaud38400"],
            ["57600", "sentry_baudrate_e.kBaud57600"],
            ["115200", "sentry_baudrate_e.kBaud115200"],
            ["230400", "sentry_baudrate_e.kBaud230400"],
            ["460800", "sentry_baudrate_e.kBaud460800"],
            ["921600", "sentry_baudrate_e.kBaud921600"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_UART_SET_BAUDRATE_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryDetected"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTED_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [Blockly.Msg.SENTRY_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
         ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_VALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryColorRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [Blockly.Msg.SENTRY_STATE_VALUE_R, "sentry_obj_info_e.kRValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_G, "sentry_obj_info_e.kGValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_B, "sentry_obj_info_e.kBValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
         ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_COLORRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryQrRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [Blockly.Msg.SENTRY_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
         ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_QRRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetQrCodeValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_QRCODEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryDetectedColor"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [Blockly.Msg.SENTRY_COLOR_BLACK, "color_label_e.kColorBlack"],
            [Blockly.Msg.SENTRY_COLOR_WHITE, "color_label_e.kColorWhite"],
            [Blockly.Msg.SENTRY_COLOR_RED, "color_label_e.kColorRed"],
            [Blockly.Msg.SENTRY_COLOR_GREEN, "color_label_e.kColorGreen"],
            [Blockly.Msg.SENTRY_COLOR_BLUE, "color_label_e.kColorBlue"],
            [Blockly.Msg.SENTRY_COLOR_YELLOW, "color_label_e.kColorYellow"],
            [Blockly.Msg.SENTRY_COLOR_UNKNOWN, "color_label_e.kColorUnkown"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTEDCOLOR_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryDetectedBlob"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [Blockly.Msg.SENTRY_COLOR_BLACK, "color_label_e.kColorBlack"],
            [Blockly.Msg.SENTRY_COLOR_WHITE, "color_label_e.kColorWhite"],
            [Blockly.Msg.SENTRY_COLOR_RED, "color_label_e.kColorRed"],
            [Blockly.Msg.SENTRY_COLOR_GREEN, "color_label_e.kColorGreen"],
            [Blockly.Msg.SENTRY_COLOR_BLUE, "color_label_e.kColorBlue"],
            [Blockly.Msg.SENTRY_COLOR_YELLOW, "color_label_e.kColorYellow"],
            [Blockly.Msg.SENTRY_COLOR_UNKNOWN, "color_label_e.kColorUnkown"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTEDBLOB_MESSAGE0,
    });
  },
};


Blockly.Blocks["SentryDetectedCard"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "card",
          options: [
            [Blockly.Msg.SENTRY_CARD_FORWARD, "card_label_e.kCardForward"],
            [Blockly.Msg.SENTRY_CARD_LEFT, "card_label_e.kCardLeft"],
            [Blockly.Msg.SENTRY_CARD_RIGHT, "card_label_e.kCardRight"],
            [Blockly.Msg.SENTRY_CARD_TURN_AROUND, "card_label_e.kCardTurnAround"],
            [Blockly.Msg.SENTRY_CARD_PARK, "card_label_e.kCardPark"],
            [Blockly.Msg.SENTRY_CARD_GREEN_LIGHT, "card_label_e.kCardGreenLight"],
            [Blockly.Msg.SENTRY_CARD_RED_LIGHT, "card_label_e.kCardRedLight"],
            [Blockly.Msg.SENTRY_CARD_SPEED_40, "card_label_e.kCardSpeed40"],
            [Blockly.Msg.SENTRY_CARD_SPEED_60, "card_label_e.kCardSpeed60"],
            [Blockly.Msg.SENTRY_CARD_SPEED_80, "card_label_e.kCardSpeed80"],
            [Blockly.Msg.SENTRY_CARD_CHECK, "card_label_e.kCardCheck"],
            [Blockly.Msg.SENTRY_CARD_CROSS, "card_label_e.kCardCross"],
            [Blockly.Msg.SENTRY_CARD_CIRCLE, "card_label_e.kCardCircle"],
            [Blockly.Msg.SENTRY_CARD_SQUARE, "card_label_e.kCardSquare"],
            [Blockly.Msg.SENTRY_CARD_TRIANGLE, "card_label_e.kCardTriangle"],
            [Blockly.Msg.SENTRY_CARD_PLUS, "card_label_e.kCardPlus"],
            [Blockly.Msg.SENTRY_CARD_MINUS, "card_label_e.kCardMinus"],
            [Blockly.Msg.SENTRY_CARD_DIVIDE, "card_label_e.kCardDivide"],
            [Blockly.Msg.SENTRY_CARD_EQUAL, "card_label_e.kCardEqual"],
            [Blockly.Msg.SENTRY_CARD_1, "card_label_e.kCardOne"],
            [Blockly.Msg.SENTRY_CARD_2, "card_label_e.kCardTwo"],
            [Blockly.Msg.SENTRY_CARD_3, "card_label_e.kCardThree"],
            [Blockly.Msg.SENTRY_CARD_4, "card_label_e.kCardFour"],
            [Blockly.Msg.SENTRY_CARD_5, "card_label_e.kCardFive"],
            [Blockly.Msg.SENTRY_CARD_6, "card_label_e.kCardSix"],
            [Blockly.Msg.SENTRY_CARD_7, "card_label_e.kCardSeven"],
            [Blockly.Msg.SENTRY_CARD_8, "card_label_e.kCardEight"],
            [Blockly.Msg.SENTRY_CARD_9, "card_label_e.kCardNine"],
            [Blockly.Msg.SENTRY_CARD_0, "card_label_e.kCardZero"],
            [Blockly.Msg.SENTRY_CARD_A, "card_label_e.kCardA"],
            [Blockly.Msg.SENTRY_CARD_B, "card_label_e.kCardB"],
            [Blockly.Msg.SENTRY_CARD_C, "card_label_e.kCardC"],
            [Blockly.Msg.SENTRY_CARD_D, "card_label_e.kCardD"],
            [Blockly.Msg.SENTRY_CARD_E, "card_label_e.kCardE"],
            [Blockly.Msg.SENTRY_CARD_F, "card_label_e.kCardF"],
            [Blockly.Msg.SENTRY_CARD_G, "card_label_e.kCardG"],
            [Blockly.Msg.SENTRY_CARD_H, "card_label_e.kCardH"],
            [Blockly.Msg.SENTRY_CARD_I, "card_label_e.kCardI"],
            [Blockly.Msg.SENTRY_CARD_J, "card_label_e.kCardJ"],
            [Blockly.Msg.SENTRY_CARD_K, "card_label_e.kCardK"],
            [Blockly.Msg.SENTRY_CARD_L, "card_label_e.kCardL"],
            [Blockly.Msg.SENTRY_CARD_N, "card_label_e.kCardM"],
            [Blockly.Msg.SENTRY_CARD_N, "card_label_e.kCardN"],
            [Blockly.Msg.SENTRY_CARD_O, "card_label_e.kCardO"],
            [Blockly.Msg.SENTRY_CARD_V, "card_label_e.kCardP"],
            [Blockly.Msg.SENTRY_CARD_W, "card_label_e.kCardQ"],
            [Blockly.Msg.SENTRY_CARD_R, "card_label_e.kCardR"],
            [Blockly.Msg.SENTRY_CARD_S, "card_label_e.kCardS"],
            [Blockly.Msg.SENTRY_CARD_T, "card_label_e.kCardT"],
            [Blockly.Msg.SENTRY_CARD_U, "card_label_e.kCardU"],
            [Blockly.Msg.SENTRY_CARD_V, "card_label_e.kCardV"],
            [Blockly.Msg.SENTRY_CARD_W, "card_label_e.kCardW"],
            [Blockly.Msg.SENTRY_CARD_X, "card_label_e.kCardX"],
            [Blockly.Msg.SENTRY_CARD_Y, "card_label_e.kCardY"],
            [Blockly.Msg.SENTRY_CARD_Z, "card_label_e.kCardZ"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTEDCARD_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryDetected20Class"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "card",
          options: [
            [Blockly.Msg.SENTRY_CLASS20_AIRPLANE, "class20_label_e.kAirplane"],
            [Blockly.Msg.SENTRY_CLASS20_BICYCLE, "class20_label_e.kBicycle"],
            [Blockly.Msg.SENTRY_CLASS20_BIRD, "class20_label_e.kBird"],
            [Blockly.Msg.SENTRY_CLASS20_BOAT, "class20_label_e.kBoat"],
            [Blockly.Msg.SENTRY_CLASS20_BOTTLE, "class20_label_e.kBus"],
            [Blockly.Msg.SENTRY_CLASS20_BUS, "class20_label_e.kCar"],
            [Blockly.Msg.SENTRY_CLASS20_CAR, "class20_label_e.kCat"],
            [Blockly.Msg.SENTRY_CLASS20_CAT, "class20_label_e.kChair"],
            [Blockly.Msg.SENTRY_CLASS20_CHAIR, "class20_label_e.kCow"],
            [Blockly.Msg.SENTRY_CLASS20_COW, "class20_label_e.kTable"],
            [Blockly.Msg.SENTRY_CLASS20_TABLE, "class20_label_e.kDog"],
            [Blockly.Msg.SENTRY_CLASS20_DOG, "class20_label_e.kHorse"],
            [Blockly.Msg.SENTRY_CLASS20_HORSE, "class20_label_e.kMotorBike"],
            [Blockly.Msg.SENTRY_CLASS20_MOTORBIKE, "class20_label_e.kPerson"],
            [Blockly.Msg.SENTRY_CLASS20_PERSON, "class20_label_e.kPlant"],
            [Blockly.Msg.SENTRY_CLASS20_PLANT, "class20_label_e.kSheep"],
            [Blockly.Msg.SENTRY_CLASS20_SHEEP, "class20_label_e.kSheep"],
            [Blockly.Msg.SENTRY_CLASS20_SOFA, "class20_label_e.kSofa"],
            [Blockly.Msg.SENTRY_CLASS20_TRAIN, "class20_label_e.kTrain"],
            [Blockly.Msg.SENTRY_CLASS20_MONITOR, "class20_label_e.kMonitor"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTED20CLASS_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryRows"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_ROWS_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryCols"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_COLS_MESSAGE0,
    });
  },
};