'use strict';
goog.provide("Blockly.Blocks.VisionSensor");
goog.require("Blockly.Blocks");

var VisionSensor_Color = "#EF5411";
var VisionSensor_SetupMode_Color = "#EF5411";
var VisionSensor_RunMode_Color = "#EAA20A";

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
      colour: VisionSensor_SetupMode_Color,
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
      message0: Blockly.Msg.SENTRY_INIT_MESSAGE0,
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
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      message0: Blockly.Msg.SENTRY_RESET_MESSAGE0,
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
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.SENTRY_VISION_COLOR_DETECT, "VISION_COLOR_DETECT"],
            [Blockly.Msg.SENTRY_VISION_COLOR_RECOGNITION, "VISION_COLOR_RECOGNITION"],
            [Blockly.Msg.SENTRY_VISION_BALL, "VISION_BALL_DETECT"],
            [Blockly.Msg.SENTRY_VISION_BODY, "VISION_BODY_DETECT"],
            [Blockly.Msg.SENTRY_VISION_SHAPE_CARD, "VISION_SHAPE_CARD_DETECT"],
            [Blockly.Msg.SENTRY_VISION_TRAFFIC_CARD, "VISION_TRAFFIC_CARD_DETECT"],
            [Blockly.Msg.SENTRY_VISION_NUM_CARD, "VISION_NUM_CARD_DETECT"],
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
Blockly.Blocks["SentryVisionBegin"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
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
      message0: Blockly.Msg.SENTRY_BEGIN_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 设置 LED
Blockly.Blocks["SentrySetLEDColor"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "led_id",
          options: [
            ["LED 1", "Led1"],
            ["LED 2", "Led2"],
            ["LED All", "LedAll"],
          ],
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "level",
        },
        {
          // type: "field_colour",
          // colour: "#0000ff",
          type: "field_dropdown",
          name: "detected_color",
          options: [
            [Blockly.Msg.SENTRY_LED_CLOSE, "LedClose"],
            [Blockly.Msg.SENTRY_LED_RED, "LedRed"],
            [Blockly.Msg.SENTRY_LED_GREEN, "LedGreen"],
            [Blockly.Msg.SENTRY_LED_YELLOW, "LedYellow"],
            [Blockly.Msg.SENTRY_LED_BLUE, "LedBlue"],
            [Blockly.Msg.SENTRY_LED_PURPLE, "LedPurple"],
            [Blockly.Msg.SENTRY_LED_CYAN, "LedCyan"],
            [Blockly.Msg.SENTRY_LED_WHITE, "LedWhite"],
          ],
        },
        {
          // type: "field_colour",
          // colour: "#ff0000",
          type: "field_dropdown",
          name: "undetected_color",
          options: [
            [Blockly.Msg.SENTRY_LED_CLOSE, "LedClose"],
            [Blockly.Msg.SENTRY_LED_RED, "LedRed"],
            [Blockly.Msg.SENTRY_LED_GREEN, "LedGreen"],
            [Blockly.Msg.SENTRY_LED_YELLOW, "LedYellow"],
            [Blockly.Msg.SENTRY_LED_BLUE, "LedBlue"],
            [Blockly.Msg.SENTRY_LED_PURPLE, "LedPurple"],
            [Blockly.Msg.SENTRY_LED_CYAN, "LedCyan"],
            [Blockly.Msg.SENTRY_LED_WHITE, "LedWhite"],
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

Blockly.Blocks["SentrySetVisionLevel"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
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
          name: "VisionLevel",
          options: [
            [Blockly.Msg.SENTRY_LEVEL_DEFAULT, "LevelDefault"],
            [Blockly.Msg.SENTRY_LEVEL_SPEED, "LevelSpeed"],
            [Blockly.Msg.SENTRY_LEVEL_BALANCE, "LevelBalance"],
            [Blockly.Msg.SENTRY_LEVEL_ACCURACY, "LevelAccuracy"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_VISION_LEVEL_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentrySetColorRecognitionRegion"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "Width",
        },
        {
          check: "Number",
          type: "input_value",
          name: "Height",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_COLOR_RECOGNITION_REGION_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentrySetColorBlockMinBlob"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "Width",
        },
        {
          check: "Number",
          type: "input_value",
          name: "Height",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentrySetVisionZoom"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
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
      message0: Blockly.Msg.SENTRY_SET_VISION_ZOOM_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentrySetUARTBaud"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "UARTBaud",
          options: [
            ["9600", "Baud9600"],
            ["19200", "Baud19200"],
            ["38400", "Baud38400"],
            ["57600", "Baud57600"],
            ["115200", "Baud115200"],
            ["230400", "Baud230400"],
            ["460800", "Baud460800"],
            ["921600", "Baud921600"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_UART_BAUD_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentrySetCameraWhiteBalance"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "WhiteBalance",
          options: [
            [Blockly.Msg.SENTRY_AUTO, "AutoWhiteBalance"],
            [Blockly.Msg.SENTRY_LOCK_AWB, "LockWhiteBalance"],
            [Blockly.Msg.SENTRY_WHITE_LIGHT, "WhiteLight"],
            [Blockly.Msg.SENTRY_YELLOW_LIGHT, "YellowLight"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_CAMERA_WHITE_BALANCE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentrySetCameraHFR"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "CameraHFR",
          checked: false,
          type: "field_checkbox",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_CAMERA_HFR_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetDetectedStatus"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
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
      message0: Blockly.Msg.SENTRY_DETECTED_STATUS_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetColorRCGLabel"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
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
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_COLOR_RCG_LABEL_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetMessageColor"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "StateValue",
          options: [
            [Blockly.Msg.SENTRY_STATE_VALUE_R, "RValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_G, "GValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_B, "BValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_LABEL, "Label"],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_MESSAGE_COLOR_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetMessage"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
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
          name: "StateValue",
          options: [
            [Blockly.Msg.SENTRY_STATE_VALUE_X, "XValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_Y, "YValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_WIDTH, "WidthValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT, "HeightValue"],
            [Blockly.Msg.SENTRY_STATE_VALUE_LABEL, "Label"],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_MESSAGE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryDetectedColorDetect"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        // {
        //   type: "field_colour",
        //   name: "ColorLabel",
        //   colour: "#ff0000",
        // },
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [Blockly.Msg.SENTRY_COLOR_BLACK, "SENTRY_COLOR_BLACK"],
            [Blockly.Msg.SENTRY_COLOR_WHITE, "SENTRY_COLOR_WHITE"],
            [Blockly.Msg.SENTRY_COLOR_RED, "SENTRY_COLOR_RED"],
            [Blockly.Msg.SENTRY_COLOR_YELLOW, "SENTRY_COLOR_YELLOW"],
            [Blockly.Msg.SENTRY_COLOR_GREEN, "SENTRY_COLOR_GREEN"],
            [Blockly.Msg.SENTRY_COLOR_CYAN, "SENTRY_COLOR_CYAN"],
            [Blockly.Msg.SENTRY_COLOR_BLUE, "SENTRY_COLOR_BLUE"],
            [Blockly.Msg.SENTRY_COLOR_PURPLE, "SENTRY_COLOR_PURPLE"],
            [Blockly.Msg.SENTRY_COLOR_UNKNOWN, "SENTRY_COLOR_UNKNOWN"],
          ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTED_COLOR_DETECT_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetColorLabel"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        // {
        //   type: "field_colour",
        //   name: "ColorLabel",
        //   colour: "#ff0000",
        // },
        {
          type: "field_dropdown",
          name: "ColorLabel",
          options: [
            [Blockly.Msg.SENTRY_COLOR_BLACK, "SENTRY_COLOR_BLACK"],
            [Blockly.Msg.SENTRY_COLOR_WHITE, "SENTRY_COLOR_WHITE"],
            [Blockly.Msg.SENTRY_COLOR_RED, "SENTRY_COLOR_RED"],
            [Blockly.Msg.SENTRY_COLOR_YELLOW, "SENTRY_COLOR_YELLOW"],
            [Blockly.Msg.SENTRY_COLOR_GREEN, "SENTRY_COLOR_GREEN"],
            [Blockly.Msg.SENTRY_COLOR_CYAN, "SENTRY_COLOR_CYAN"],
            [Blockly.Msg.SENTRY_COLOR_BLUE, "SENTRY_COLOR_BLUE"],
            [Blockly.Msg.SENTRY_COLOR_PURPLE, "SENTRY_COLOR_PURPLE"],
            [Blockly.Msg.SENTRY_COLOR_UNKNOWN, "SENTRY_COLOR_UNKNOWN"],
          ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_COLOR_LABEL_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetShapeCardType"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "ShapeCardType",
          options: [
            [Blockly.Msg.SENTRY_CARD_TICK, "SENTRY_SHAPE_CARD_TICK"],
            [Blockly.Msg.SENTRY_CARD_CROSS, "SENTRY_SHAPE_CARD_CROSS"],
            [Blockly.Msg.SENTRY_CARD_CIRCLE, "SENTRY_SHAPE_CARD_CIRCLE"],
            [Blockly.Msg.SENTRY_CARD_SQUARE, "SENTRY_SHAPE_CARD_SQUARE"],
            [Blockly.Msg.SENTRY_CARD_TRIANGLE, "SENTRY_SHAPE_CARD_TRIANGLE"],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_SHAPE_CARD_TYPE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetTrafficCardType"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "TrafficCardType",
          options: [
            [Blockly.Msg.SENTRY_CARD_STRAIGHT, "SENTRY_TRAFFIC_CARD_FORWARD"],
            [Blockly.Msg.SENTRY_CARD_TURN_LEFT, "SENTRY_TRAFFIC_CARD_LEFT"],
            [Blockly.Msg.SENTRY_CARD_TURN_RIGHT, "SENTRY_TRAFFIC_CARD_RIGHT"],
            [Blockly.Msg.SENTRY_CARD_TURN_AROUND, "SENTRY_TRAFFIC_CARD_TURN_AROUND"],
            [Blockly.Msg.SENTRY_CARD_STOP, "SENTRY_TRAFFIC_CARD_PARK"],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_TRAFFIC_CARD_TYPE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetNumCardType"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "NumCardType",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["0", "0"],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_NUM_CARD_TYPE_MESSAGE0,
    });
  },
};