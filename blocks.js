'use strict';
goog.provide("Blockly.Blocks.VisionSensor");
goog.require("Blockly.Blocks");

var VisionSensor_Color = "#EF5411";
var VisionSensor_SetupMode_Color = "#EF5411";
var VisionSensor_RunMode_Color = "#EAA20A";
var VisionSensor_LightSensor_Color = "#EAA20A";
var VisionSensor_AT_Color = "#11ACEF";

var lVsMu = [
  ["MU00", "0"],
  ["MU01", "1"],
  ["MU10", "2"],
  ["MU11", "3"],
];

// Blockly.FieldColour.COLOURS = ['#ffffff', '#000000', '#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff', '#00ffff'];
// Blockly.FieldColour.TITLES = ['LedWhite', 'LedClose', 'LedRed', 'LedGreen', 'LedYellow', 'LedBlue', 'LedPurple', 'LedCyan'];
// Blockly.FieldColour.COLUMNS = 3;

// 初始化 MU
Blockly.Blocks["Vs2MuInit"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
      message0: Blockly.Msg.LKL_VS2_MU_INIT_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      helpUrl: "https://morpx-docs.readthedocs.io/zh_CN/latest/",
      tooltip: Blockly.Msg.LKL_VS2_HELP_INIT_TOOLTIP,
    });
  },
};

// 恢复默认设置
Blockly.Blocks["Vs2Reset"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
          type: "field_dropdown",
        },
      ],
      message0: Blockly.Msg.LKL_VS2_MU_RESET_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 算法类型
Blockly.Blocks["Vs2VisionType"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.LKL_VS2_VISION_COLOR_DETECT, "VISION_COLOR_DETECT"],
            [Blockly.Msg.LKL_VS2_VISION_COLOR_RECOGNITION, "VISION_COLOR_RECOGNITION"],
            [Blockly.Msg.LKL_VS2_VISION_BALL, "VISION_BALL_DETECT"],
            [Blockly.Msg.LKL_VS2_VISION_BODY, "VISION_BODY_DETECT"],
            [Blockly.Msg.LKL_VS2_VISION_SHAPE_CARD, "VISION_SHAPE_CARD_DETECT"],
            [Blockly.Msg.LKL_VS2_VISION_TRAFFIC_CARD, "VISION_TRAFFIC_CARD_DETECT"],
            [Blockly.Msg.LKL_VS2_VISION_NUM_CARD, "VISION_NUM_CARD_DETECT"],
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
Blockly.Blocks["Vs2VisionBegin"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
          type: "field_dropdown",
        },
        {
          name: "VisionStatus",
          options: [
            [Blockly.Msg.LKL_VS2_ENABLE, "Begin"],
            [Blockly.Msg.LKL_VS2_DISABLE, "End"],
          ],
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
      ],
      message0: Blockly.Msg.LKL_VS2_MU_BEGIN_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 设置 LED
Blockly.Blocks["Vs2SetLEDColor"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
            [Blockly.Msg.LKL_VS2_LED_CLOSE, "LedClose"],
            [Blockly.Msg.LKL_VS2_LED_RED, "LedRed"],
            [Blockly.Msg.LKL_VS2_LED_GREEN, "LedGreen"],
            [Blockly.Msg.LKL_VS2_LED_YELLOW, "LedYellow"],
            [Blockly.Msg.LKL_VS2_LED_BLUE, "LedBlue"],
            [Blockly.Msg.LKL_VS2_LED_PURPLE, "LedPurple"],
            [Blockly.Msg.LKL_VS2_LED_CYAN, "LedCyan"],
            [Blockly.Msg.LKL_VS2_LED_WHITE, "LedWhite"],
          ],
        },
        {
          // type: "field_colour",
          // colour: "#ff0000",
          type: "field_dropdown",
          name: "undetected_color",
          options: [
            [Blockly.Msg.LKL_VS2_LED_CLOSE, "LedClose"],
            [Blockly.Msg.LKL_VS2_LED_RED, "LedRed"],
            [Blockly.Msg.LKL_VS2_LED_GREEN, "LedGreen"],
            [Blockly.Msg.LKL_VS2_LED_YELLOW, "LedYellow"],
            [Blockly.Msg.LKL_VS2_LED_BLUE, "LedBlue"],
            [Blockly.Msg.LKL_VS2_LED_PURPLE, "LedPurple"],
            [Blockly.Msg.LKL_VS2_LED_CYAN, "LedCyan"],
            [Blockly.Msg.LKL_VS2_LED_WHITE, "LedWhite"],
          ],
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.LKL_VS2_MU_LED_SET_COLOR_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["Vs2SetVisionLevel"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
            [Blockly.Msg.LKL_VS2_LEVEL_DEFAULT, "LevelDefault"],
            [Blockly.Msg.LKL_VS2_LEVEL_SPEED, "LevelSpeed"],
            [Blockly.Msg.LKL_VS2_LEVEL_BALANCE, "LevelBalance"],
            [Blockly.Msg.LKL_VS2_LEVEL_ACCURACY, "LevelAccuracy"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.LKL_VS2_MU_SET_VISION_LEVEL_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2SetColorRecognitionRegion"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
      message0: Blockly.Msg.LKL_VS2_MU_SET_COLOR_RECOGNITION_REGION_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2SetColorBlockMinBlob"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
      message0: Blockly.Msg.LKL_VS2_MU_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2SetVisionZoom"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
          type: "field_dropdown",
        },
        {
          name: "ZoomLevel",
          options: [
            [Blockly.Msg.LKL_VS2_ZOOM_DEFAULT, "ZoomDefault"],
            [Blockly.Msg.LKL_VS2_ZOOM_1, "Zoom1"],
            [Blockly.Msg.LKL_VS2_ZOOM_2, "Zoom2"],
            [Blockly.Msg.LKL_VS2_ZOOM_3, "Zoom3"],
            [Blockly.Msg.LKL_VS2_ZOOM_4, "Zoom4"],
            [Blockly.Msg.LKL_VS2_ZOOM_5, "Zoom5"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.LKL_VS2_MU_SET_VISION_ZOOM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2SetUARTBaud"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
      message0: Blockly.Msg.LKL_VS2_MU_SET_UART_BAUD_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2SetCameraWhiteBalance"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
          type: "field_dropdown",
        },
        {
          name: "WhiteBalance",
          options: [
            [Blockly.Msg.LKL_VS2_AUTO, "AutoWhiteBalance"],
            [Blockly.Msg.LKL_VS2_LOCK_AWB, "LockWhiteBalance"],
            [Blockly.Msg.LKL_VS2_WHITE_LIGHT, "WhiteLight"],
            [Blockly.Msg.LKL_VS2_YELLOW_LIGHT, "YellowLight"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.LKL_VS2_MU_SET_CAMERA_WHITE_BALANCE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2SetCameraHFR"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
      message0: Blockly.Msg.LKL_VS2_MU_SET_CAMERA_HFR_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2GetDetectedStatus"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
      message0: Blockly.Msg.LKL_VS2_MU_DETECTED_STATUS_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2GetColorRCGLabel"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
      message0: Blockly.Msg.LKL_VS2_MU_GET_COLOR_RCG_LABEL_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2GetMessageColor"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
          type: "field_dropdown",
        },
        {
          name: "StateValue",
          options: [
            [Blockly.Msg.LKL_VS2_STATE_VALUE_R, "RValue"],
            [Blockly.Msg.LKL_VS2_STATE_VALUE_G, "GValue"],
            [Blockly.Msg.LKL_VS2_STATE_VALUE_B, "BValue"],
            [Blockly.Msg.LKL_VS2_STATE_VALUE_LABEL, "Label"],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_COLOR_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2GetMessage"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
            [Blockly.Msg.LKL_VS2_STATE_VALUE_X, "XValue"],
            [Blockly.Msg.LKL_VS2_STATE_VALUE_Y, "YValue"],
            [Blockly.Msg.LKL_VS2_STATE_VALUE_WIDTH, "WidthValue"],
            [Blockly.Msg.LKL_VS2_STATE_VALUE_HEIGHT, "HeightValue"],
            [Blockly.Msg.LKL_VS2_STATE_VALUE_LABEL, "Label"],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2DetectedColorDetect"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
            [Blockly.Msg.LKL_VS2_COLOR_BLACK, "MU_COLOR_BLACK"],
            [Blockly.Msg.LKL_VS2_COLOR_WHITE, "MU_COLOR_WHITE"],
            [Blockly.Msg.LKL_VS2_COLOR_RED, "MU_COLOR_RED"],
            [Blockly.Msg.LKL_VS2_COLOR_YELLOW, "MU_COLOR_YELLOW"],
            [Blockly.Msg.LKL_VS2_COLOR_GREEN, "MU_COLOR_GREEN"],
            [Blockly.Msg.LKL_VS2_COLOR_CYAN, "MU_COLOR_CYAN"],
            [Blockly.Msg.LKL_VS2_COLOR_BLUE, "MU_COLOR_BLUE"],
            [Blockly.Msg.LKL_VS2_COLOR_PURPLE, "MU_COLOR_PURPLE"],
            [Blockly.Msg.LKL_VS2_COLOR_UNKNOWN, "MU_COLOR_UNKNOWN"],
          ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.LKL_VS2_MU_DETECTED_COLOR_DETECT_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2GetColorLabel"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
            [Blockly.Msg.LKL_VS2_COLOR_BLACK, "MU_COLOR_BLACK"],
            [Blockly.Msg.LKL_VS2_COLOR_WHITE, "MU_COLOR_WHITE"],
            [Blockly.Msg.LKL_VS2_COLOR_RED, "MU_COLOR_RED"],
            [Blockly.Msg.LKL_VS2_COLOR_YELLOW, "MU_COLOR_YELLOW"],
            [Blockly.Msg.LKL_VS2_COLOR_GREEN, "MU_COLOR_GREEN"],
            [Blockly.Msg.LKL_VS2_COLOR_CYAN, "MU_COLOR_CYAN"],
            [Blockly.Msg.LKL_VS2_COLOR_BLUE, "MU_COLOR_BLUE"],
            [Blockly.Msg.LKL_VS2_COLOR_PURPLE, "MU_COLOR_PURPLE"],
            [Blockly.Msg.LKL_VS2_COLOR_UNKNOWN, "MU_COLOR_UNKNOWN"],
          ],
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.LKL_VS2_MU_GET_COLOR_LABEL_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2GetShapeCardType"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
          type: "field_dropdown",
        },
        {
          name: "ShapeCardType",
          options: [
            [Blockly.Msg.LKL_VS2_CARD_TICK, "MU_SHAPE_CARD_TICK"],
            [Blockly.Msg.LKL_VS2_CARD_CROSS, "MU_SHAPE_CARD_CROSS"],
            [Blockly.Msg.LKL_VS2_CARD_CIRCLE, "MU_SHAPE_CARD_CIRCLE"],
            [Blockly.Msg.LKL_VS2_CARD_SQUARE, "MU_SHAPE_CARD_SQUARE"],
            [Blockly.Msg.LKL_VS2_CARD_TRIANGLE, "MU_SHAPE_CARD_TRIANGLE"],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.LKL_VS2_MU_GET_SHAPE_CARD_TYPE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2GetTrafficCardType"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
          type: "field_dropdown",
        },
        {
          name: "TrafficCardType",
          options: [
            [Blockly.Msg.LKL_VS2_CARD_STRAIGHT, "MU_TRAFFIC_CARD_FORWARD"],
            [Blockly.Msg.LKL_VS2_CARD_TURN_LEFT, "MU_TRAFFIC_CARD_LEFT"],
            [Blockly.Msg.LKL_VS2_CARD_TURN_RIGHT, "MU_TRAFFIC_CARD_RIGHT"],
            [Blockly.Msg.LKL_VS2_CARD_TURN_AROUND, "MU_TRAFFIC_CARD_TURN_AROUND"],
            [Blockly.Msg.LKL_VS2_CARD_STOP, "MU_TRAFFIC_CARD_PARK"],
          ],
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.LKL_VS2_MU_GET_TRAFFIC_CARD_TYPE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Vs2GetNumCardType"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "lVsMu",
          options: lVsMu,
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
      message0: Blockly.Msg.LKL_VS2_MU_GET_NUM_CARD_TYPE_MESSAGE0,
    });
  },
};