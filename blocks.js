'use strict';
goog.provide("Blockly.Blocks.Sentry");
goog.require("Blockly.Blocks");

var Sentry_Color = "#EF5411";
var Sentry_SetupMode_Color = "#EF5411";
var Sentry_RunMode_Color = "#EAA20A";

var sentry = [
  ["0x60", "0"],
  ["0x61", "1"],
  ["0x62", "2"],
  ["0x63", "3"],
];

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
          type: "field_dropdown",
          name: "lable",
          options: [
            [Blockly.Msg.SENTRY_COLOR_BLACK, "color_label_e.kColorBlack"],
            [Blockly.Msg.SENTRY_COLOR_WHITE, "color_label_e.kColorWhite"],
            [Blockly.Msg.SENTRY_COLOR_RED, "color_label_e.kColorRed"],
            [Blockly.Msg.SENTRY_COLOR_GREEN, "color_label_e.kColorGreen"],
            [Blockly.Msg.SENTRY_COLOR_BLUE, "color_label_e.kColorBlue"],
            [Blockly.Msg.SENTRY_COLOR_YELLOW, "color_label_e.kColorYellow"],
          ],
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

// 初始化 Sentry
Blockly.Blocks["Sentry1Begin"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "InitType",
          options: [
            ["i2c", "i2c"],
            ["uart1", "uart1"],
            ["uart2", "uart2"],
          ],
          type: "field_dropdown",
        },
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      message0: Blockly.Msg.SENTRY1_BEGIN_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      helpUrl: "https://morpx-docs.readthedocs.io/zh_CN/latest/",
      tooltip: Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP,
    });
  },
};

// 恢复默认设置
Blockly.Blocks["Sentry1SetDefault"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,

      message0: Blockly.Msg.SENTRY1_SET_DEFAULT_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 算法类型
Blockly.Blocks["Sentry1VisionType"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "sentry1_vision_e.kVisionBlob"],
            [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "sentry1_vision_e.kVisionColor"],
            [Blockly.Msg.SENTRY_VISION_VISIONBALL, "sentry1_vision_e.kVisionBall"],
            [Blockly.Msg.SENTRY_VISION_VISIONLINE, "sentry1_vision_e.kVisionLine"],
            [Blockly.Msg.SENTRY_VISION_VISIONCARD, "sentry1_vision_e.kVisionCard"],
            [Blockly.Msg.SENTRY_VISION_VISIONBODY, "sentry1_vision_e.kVisionBody"]
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
Blockly.Blocks["Sentry1VisionSetStatus"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY1_VISION_SET_STATUS_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

Blockly.Blocks["Sentry1SetParamNum"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY1_SET_PARAMNUM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1SetColorParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "sentry1_vision_e.kVisionColor"],
          ],
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
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY1_COLORPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1SetBlodParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "sentry1_vision_e.kVisionBlob"],
          ],
          type: "field_dropdown",
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
        {
          type: "field_dropdown",
          name: "lable",
          options: [
            [Blockly.Msg.SENTRY_COLOR_BLACK, "color_label_e.kColorBlack"],
            [Blockly.Msg.SENTRY_COLOR_WHITE, "color_label_e.kColorWhite"],
            [Blockly.Msg.SENTRY_COLOR_RED, "color_label_e.kColorRed"],
            [Blockly.Msg.SENTRY_COLOR_GREEN, "color_label_e.kColorGreen"],
            [Blockly.Msg.SENTRY_COLOR_BLUE, "color_label_e.kColorBlue"],
            [Blockly.Msg.SENTRY_COLOR_YELLOW, "color_label_e.kColorYellow"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY1_BOLDPARAM_MESSAGE0,
    });
  },
};

// 设置 LED
Blockly.Blocks["Sentry1LedSetColor"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY1_LED_SET_COLOR_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["Sentry1CameraSetZoom"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "ZoomLevel",
          options: [
            [Blockly.Msg.SENTRY_ZOOM_DEFAULT, "sentry_camera_zoom_e.kZoomDefault"],
            [Blockly.Msg.SENTRY_ZOOM_1, "sentry_camera_zoom_e.kZoom1"],
            [Blockly.Msg.SENTRY_ZOOM_2, "sentry_camera_zoom_e.kZoom2"],
            [Blockly.Msg.SENTRY_ZOOM_3, "sentry_camera_zoom_e.kZoom3"],
            [Blockly.Msg.SENTRY_ZOOM_4, "sentry_camera_zoom_e.kZoom4"],
            [Blockly.Msg.SENTRY_ZOOM_5, "sentry_camera_zoom_e.kZoom5"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY1_CAMERA_SET_ZOOM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1CameraSetRotate"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY2_CAMERA_SET_ROTATE_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["Sentry1CameraSetAwb"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "awb",
          options: [
            [Blockly.Msg.SENTRY_AWB_AUTO, "sentry_camera_white_balance_e.kAutoWhiteBalance"],
            [Blockly.Msg.SENTRY_AWB_LOCK, "sentry_camera_white_balance_e.kLockWhiteBalance"],
            [Blockly.Msg.SENTRY_AWB_WHITE_LIGHT, "sentry_camera_white_balance_e.kWhiteLight"],
            [Blockly.Msg.SENTRY_AWB_YELLOW_LIGHT, "sentry_camera_white_balance_e.kYellowLight"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY1_CAMERA_SET_AWB_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["Sentry1CameraSetFPS"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY1_CAMERA_SET_FPS_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["Sentry1UartSetBaudrate"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY1_UART_SET_BAUDRATE_MESSAGE0,
      inputsInline: true,
    });
  },
};
Blockly.Blocks["Sentry1Detected"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY1_DETECTED_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1GetValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY1_GET_VALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1ColorRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY1_COLORRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1LineValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [Blockly.Msg.SENTRY_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
            [Blockly.Msg.SENTRY_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
            [Blockly.Msg.SENTRY_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
            [Blockly.Msg.SENTRY_STATE_LINE_SY, "sentry_obj_info_e.kHeightValue"],
            [Blockly.Msg.SENTRY_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
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
      message0: Blockly.Msg.SENTRY1_LINEVALUE_MESSAGE0,
    });
  },
};


Blockly.Blocks["Sentry1DetectedColor"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY1_DETECTEDCOLOR_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1DetectedBlob"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY1_DETECTEDBLOB_MESSAGE0,
    });
  },
};


Blockly.Blocks["Sentry1DetectedCard"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "card",
          options: [
            [Blockly.Msg.SENTRY_CARD_FORWARD, "sentry1_card_label_e.kCardForward"],
            [Blockly.Msg.SENTRY_CARD_LEFT, "sentry1_card_label_e.kCardLeft"],
            [Blockly.Msg.SENTRY_CARD_RIGHT, "sentry1_card_label_e.kCardRight"],
            [Blockly.Msg.SENTRY_CARD_TURN_AROUND, "sentry1_card_label_e.kCardTurnAround"],
            [Blockly.Msg.SENTRY_CARD_PARK, "sentry1_card_label_e.kCardPark"],

            [Blockly.Msg.SENTRY_CARD_CHECK, "sentry1_shape_card_e.kCardCheck"],
            [Blockly.Msg.SENTRY_CARD_CROSS, "sentry1_shape_card_e.kCardCross"],
            [Blockly.Msg.SENTRY_CARD_CIRCLE, "sentry1_shape_card_e.kCardCircle"],
            [Blockly.Msg.SENTRY_CARD_SQUARE, "sentry1_shape_card_e.kCardSquare"],
            [Blockly.Msg.SENTRY_CARD_TRIANGLE, "sentry1_shape_card_e.kCardTriangle"],
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
      message0: Blockly.Msg.SENTRY1_DETECTEDCARD_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1DetectedBall"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "card",
          options: [
            [Blockly.Msg.SENTRY_BALLTABLETENNIS, "sentry1_ball_label_e.kBallTableTennis"],
            [Blockly.Msg.SENTRY_BALLTENNIS, "sentry1_ball_label_e.kBallTennis"],
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
      message0: Blockly.Msg.SENTRY1_DETECTEDBALL_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1Rows"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,

      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY2_ROWS_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry1Cols"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,

      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY2_COLS_MESSAGE0,
    });
  },
};

// 初始化 Sentry2
Blockly.Blocks["Sentry2Begin"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "InitType",
          options: [
            ["i2c", "i2c"],
            ["uart1", "uart1"],
            ["uart2", "uart2"],
          ],
          type: "field_dropdown",
        },
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      message0: Blockly.Msg.SENTRY2_BEGIN_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      helpUrl: "https://morpx-docs.readthedocs.io/zh_CN/latest/",
      tooltip: Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP,
    });
  },
};

// 恢复默认设置
Blockly.Blocks["Sentry2SetDefault"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,

      message0: Blockly.Msg.SENTRY2_SET_DEFAULT_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

Blockly.Blocks["SeneorSetCoordinateType"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "CoordinateType",
          options: [
            [Blockly.Msg.SENTRY_ABSOLUTE_COORDINATE, 0],
            [Blockly.Msg.SENTRY_PERCENT_AGECOORDINATE, 1],
          ],
          type: "field_dropdown",
        },
      ],
      message0: Blockly.Msg.SENTRY2_SET_COORD_TYPE_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 算法类型
Blockly.Blocks["Sentry2VisionType"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
            [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
            [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "sentry2_vision_e.kVisionAprilTag"],
            [Blockly.Msg.SENTRY_VISION_VISIONLINE, "sentry2_vision_e.kVisionLine"],
            [Blockly.Msg.SENTRY_VISION_VISIONLEARNING, "sentry2_vision_e.kVisionLearning"],
            [Blockly.Msg.SENTRY_VISION_VISIONCARD, "sentry2_vision_e.kVisionCard"],
            [Blockly.Msg.SENTRY_VISION_VISIONFACE, "sentry2_vision_e.kVisionFace"],
            [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "sentry2_vision_e.kVision20Classes"],
            [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "sentry2_vision_e.kVisionQrCode"],
            [Blockly.Msg.SENTRY_VISION_VISIONOBJTRACK, "sentry2_vision_e.kVisionObjTrack"],
            [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "sentry2_vision_e.kVisionMotionDetect"],
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
Blockly.Blocks["Sentry2VisionSetStatus"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY2_VISION_SET_STATUS_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

Blockly.Blocks["Sentry2SetParamNum"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY2_SET_PARAMNUM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2SetColorParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "sentry2_vision_e.kVisionColor"],
          ],
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
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY2_COLORPARAM_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2SetBlodParam"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "sentry2_vision_e.kVisionBlob"],
          ],
          type: "field_dropdown",
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
        {
          type: "field_dropdown",
          name: "lable",
          options: [
            [Blockly.Msg.SENTRY_COLOR_BLACK, "color_label_e.kColorBlack"],
            [Blockly.Msg.SENTRY_COLOR_WHITE, "color_label_e.kColorWhite"],
            [Blockly.Msg.SENTRY_COLOR_RED, "color_label_e.kColorRed"],
            [Blockly.Msg.SENTRY_COLOR_GREEN, "color_label_e.kColorGreen"],
            [Blockly.Msg.SENTRY_COLOR_BLUE, "color_label_e.kColorBlue"],
            [Blockly.Msg.SENTRY_COLOR_YELLOW, "color_label_e.kColorYellow"],
          ],
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY2_BOLDPARAM_MESSAGE0,
    });
  },
};

// // 设置 LCD
// Blockly.Blocks["Sentry2LcdSetMode"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "lcd_sw",
//           options: [
//             ["ON", "True"],
//             ["OFF", "False"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY2_LCD_SET_MODE_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

// // 设置 LED
// Blockly.Blocks["Sentry2LedSetColor"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           check: "Number",
//           type: "input_value",
//           name: "level",
//         },
//         {
//           type: "field_dropdown",
//           name: "detected_color",
//           options: [
//             [Blockly.Msg.SENTRY_LED_CLOSE, "sentry_led_color_e.kLedClose"],
//             [Blockly.Msg.SENTRY_LED_RED, "sentry_led_color_e.kLedRed"],
//             [Blockly.Msg.SENTRY_LED_GREEN, "sentry_led_color_e.kLedGreen"],
//             [Blockly.Msg.SENTRY_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
//             [Blockly.Msg.SENTRY_LED_BLUE, "sentry_led_color_e.kLedBlue"],
//             [Blockly.Msg.SENTRY_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
//             [Blockly.Msg.SENTRY_LED_CYAN, "sentry_led_color_e.kLedCyan"],
//             [Blockly.Msg.SENTRY_LED_WHITE, "sentry_led_color_e.kLedWhite"],
//           ],
//         },
//         {
//           type: "field_dropdown",
//           name: "undetected_color",
//           options: [
//             [Blockly.Msg.SENTRY_LED_CLOSE, "sentry_led_color_e.kLedClose"],
//             [Blockly.Msg.SENTRY_LED_RED, "sentry_led_color_e.kLedRed"],
//             [Blockly.Msg.SENTRY_LED_GREEN, "sentry_led_color_e.kLedGreen"],
//             [Blockly.Msg.SENTRY_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
//             [Blockly.Msg.SENTRY_LED_BLUE, "sentry_led_color_e.kLedBlue"],
//             [Blockly.Msg.SENTRY_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
//             [Blockly.Msg.SENTRY_LED_CYAN, "sentry_led_color_e.kLedCyan"],
//             [Blockly.Msg.SENTRY_LED_WHITE, "sentry_led_color_e.kLedWhite"],
//           ],
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY_LED_SET_COLOR_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

// Blockly.Blocks["Sentry2CameraSetZoom"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "ZoomLevel",
//           options: [
//             [Blockly.Msg.SENTRY_ZOOM_DEFAULT, "sentry_camera_zoom_e.kZoomDefault"],
//             [Blockly.Msg.SENTRY_ZOOM_1, "sentry_camera_zoom_e.kZoom1"],
//             [Blockly.Msg.SENTRY_ZOOM_2, "sentry_camera_zoom_e.kZoom2"],
//             [Blockly.Msg.SENTRY_ZOOM_3, "sentry_camera_zoom_e.kZoom3"],
//             [Blockly.Msg.SENTRY_ZOOM_4, "sentry_camera_zoom_e.kZoom4"],
//             [Blockly.Msg.SENTRY_ZOOM_5, "sentry_camera_zoom_e.kZoom5"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       inputsInline: true,
//       message0: Blockly.Msg.SENTRY2_CAMERA_SET_ZOOM_MESSAGE0,
//     });
//   },
// };

// Blockly.Blocks["Sentry2CameraSetRotate"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "rotate",
//           options: [
//             ["ON", "True"],
//             ["OFF", "False"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY2_CAMERA_SET_ROTATE_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

// Blockly.Blocks["Sentry2CameraSetAwb"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "awb",
//           options: [
//             [Blockly.Msg.SENTRY_AWB_AUTO, "sentry_camera_white_balance_e.kAutoWhiteBalance"],
//             [Blockly.Msg.SENTRY_AWB_LOCK, "sentry_camera_white_balance_e.kLockWhiteBalance"],
//             [Blockly.Msg.SENTRY_AWB_WHITE_LIGHT, "sentry_camera_white_balance_e.kWhiteLight"],
//             [Blockly.Msg.SENTRY_AWB_YELLOW_LIGHT, "sentry_camera_white_balance_e.kYellowLight"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY2_CAMERA_SET_AWB_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

// Blockly.Blocks["Sentry2CameraSetFPS"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "fps",
//           options: [
//             ["ON", "True"],
//             ["OFF", "False"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY2_CAMERA_SET_FPS_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

// Blockly.Blocks["Sentry2CameraSetBrightness"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "level",
//           options: [
//             [Blockly.Msg.SENTRY_LEVEL_DEFAULT, "sentry_camera_config_e.kLevelDefault"],
//             [Blockly.Msg.SENTRY_LEVEL1, "sentry_camera_config_e.kLevel1"],
//             [Blockly.Msg.SENTRY_LEVEL2, "sentry_camera_config_e.kLevel2"],
//             [Blockly.Msg.SENTRY_LEVEL3, "sentry_camera_config_e.kLevel3"],
//             [Blockly.Msg.SENTRY_LEVEL4, "sentry_camera_config_e.kLevel4"],
//             [Blockly.Msg.SENTRY_LEVEL5, "sentry_camera_config_e.kLevel5"],
//             [Blockly.Msg.SENTRY_LEVEL6, "sentry_camera_config_e.kLevel6"],
//             [Blockly.Msg.SENTRY_LEVEL7, "sentry_camera_config_e.kLevel7"],
//             [Blockly.Msg.SENTRY_LEVEL8, "sentry_camera_config_e.kLevel8"],
//             [Blockly.Msg.SENTRY_LEVEL9, "sentry_camera_config_e.kLevel9"],
//             [Blockly.Msg.SENTRY_LEVEL10, "sentry_camera_config_e.kLevel10"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY2_CAMERA_SET_BRIGHTNESS_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

// Blockly.Blocks["Sentry2CameraSetContrast"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "level",
//           options: [
//             [Blockly.Msg.SENTRY_LEVEL_DEFAULT, "sentry_camera_config_e.kLevelDefault"],
//             [Blockly.Msg.SENTRY_LEVEL1, "sentry_camera_config_e.kLevel1"],
//             [Blockly.Msg.SENTRY_LEVEL2, "sentry_camera_config_e.kLevel2"],
//             [Blockly.Msg.SENTRY_LEVEL3, "sentry_camera_config_e.kLevel3"],
//             [Blockly.Msg.SENTRY_LEVEL4, "sentry_camera_config_e.kLevel4"],
//             [Blockly.Msg.SENTRY_LEVEL5, "sentry_camera_config_e.kLevel5"],
//             [Blockly.Msg.SENTRY_LEVEL6, "sentry_camera_config_e.kLevel6"],
//             [Blockly.Msg.SENTRY_LEVEL7, "sentry_camera_config_e.kLevel7"],
//             [Blockly.Msg.SENTRY_LEVEL8, "sentry_camera_config_e.kLevel8"],
//             [Blockly.Msg.SENTRY_LEVEL9, "sentry_camera_config_e.kLevel9"],
//             [Blockly.Msg.SENTRY_LEVEL10, "sentry_camera_config_e.kLevel10"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY2_CAMERA_SET_CONTRAST_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

// Blockly.Blocks["Sentry2CameraSetSaturation"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "level",
//           options: [
//             [Blockly.Msg.SENTRY_LEVEL_DEFAULT, "sentry_camera_config_e.kLevelDefault"],
//             [Blockly.Msg.SENTRY_LEVEL1, "sentry_camera_config_e.kLevel1"],
//             [Blockly.Msg.SENTRY_LEVEL2, "sentry_camera_config_e.kLevel2"],
//             [Blockly.Msg.SENTRY_LEVEL3, "sentry_camera_config_e.kLevel3"],
//             [Blockly.Msg.SENTRY_LEVEL4, "sentry_camera_config_e.kLevel4"],
//             [Blockly.Msg.SENTRY_LEVEL5, "sentry_camera_config_e.kLevel5"],
//             [Blockly.Msg.SENTRY_LEVEL6, "sentry_camera_config_e.kLevel6"],
//             [Blockly.Msg.SENTRY_LEVEL7, "sentry_camera_config_e.kLevel7"],
//             [Blockly.Msg.SENTRY_LEVEL8, "sentry_camera_config_e.kLevel8"],
//             [Blockly.Msg.SENTRY_LEVEL9, "sentry_camera_config_e.kLevel9"],
//             [Blockly.Msg.SENTRY_LEVEL10, "sentry_camera_config_e.kLevel10"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY2_CAMERA_SET_SATURATION_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

// Blockly.Blocks["Sentry2CameraSetShaprness"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "level",
//           options: [
//             [Blockly.Msg.SENTRY_LEVEL_DEFAULT, "sentry_camera_config_e.kLevelDefault"],
//             [Blockly.Msg.SENTRY_LEVEL1, "sentry_camera_config_e.kLevel1"],
//             [Blockly.Msg.SENTRY_LEVEL2, "sentry_camera_config_e.kLevel2"],
//             [Blockly.Msg.SENTRY_LEVEL3, "sentry_camera_config_e.kLevel3"],
//             [Blockly.Msg.SENTRY_LEVEL4, "sentry_camera_config_e.kLevel4"],
//             [Blockly.Msg.SENTRY_LEVEL5, "sentry_camera_config_e.kLevel5"],
//             [Blockly.Msg.SENTRY_LEVEL6, "sentry_camera_config_e.kLevel6"],
//             [Blockly.Msg.SENTRY_LEVEL7, "sentry_camera_config_e.kLevel7"],
//             [Blockly.Msg.SENTRY_LEVEL8, "sentry_camera_config_e.kLevel8"],
//             [Blockly.Msg.SENTRY_LEVEL9, "sentry_camera_config_e.kLevel9"],
//             [Blockly.Msg.SENTRY_LEVEL10, "sentry_camera_config_e.kLevel10"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY2_CAMERA_SET_SHAPRNESS_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

// Blockly.Blocks["Sentry2UartSetBaudrate"] = {
//   init: function () {
//     this.jsonInit({
//       colour: Sentry_SetupMode_Color,
//       args0: [

//         {
//           name: "buad",
//           options: [
//             ["9600", "sentry_baudrate_e.kBaud9600"],
//             ["19200", "sentry_baudrate_e.kBaud19200"],
//             ["38400", "sentry_baudrate_e.kBaud38400"],
//             ["57600", "sentry_baudrate_e.kBaud57600"],
//             ["115200", "sentry_baudrate_e.kBaud115200"],
//             ["230400", "sentry_baudrate_e.kBaud230400"],
//             ["460800", "sentry_baudrate_e.kBaud460800"],
//             ["921600", "sentry_baudrate_e.kBaud921600"],
//           ],
//           type: "field_dropdown",
//         },
//       ],
//       nextStatement: null,
//       previousStatement: null,
//       message0: Blockly.Msg.SENTRY2_UART_SET_BAUDRATE_MESSAGE0,
//       inputsInline: true,
//     });
//   },
// };

Blockly.Blocks["Sentry2Detected"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY2_DETECTED_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2GetValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY2_GET_VALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2ColorRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY2_COLORRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2QrRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY2_QRRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2GetQrCodeValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,

      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY2_GET_QRCODEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2LineValue"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          type: "field_dropdown",
          name: "objinfo",
          options: [
            [Blockly.Msg.SENTRY_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
            [Blockly.Msg.SENTRY_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
            [Blockly.Msg.SENTRY_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
            [Blockly.Msg.SENTRY_STATE_LINE_SY, "sentry_obj_info_e.kHeightValue"],
            [Blockly.Msg.SENTRY_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
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
      message0: Blockly.Msg.SENTRY2_LINEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2DetectedColor"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY2_DETECTEDCOLOR_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2DetectedBlob"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY2_DETECTEDBLOB_MESSAGE0,
    });
  },
};


Blockly.Blocks["Sentry2DetectedCard"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
        {
          name: "card",
          options: [
            [Blockly.Msg.SENTRY_CARD_FORWARD, "sentry2_card_label_e.kCardForward"],
            [Blockly.Msg.SENTRY_CARD_LEFT, "sentry2_card_label_e.kCardLeft"],
            [Blockly.Msg.SENTRY_CARD_RIGHT, "sentry2_card_label_e.kCardRight"],
            [Blockly.Msg.SENTRY_CARD_TURN_AROUND, "sentry2_card_label_e.kCardTurnAround"],
            [Blockly.Msg.SENTRY_CARD_PARK, "sentry2_card_label_e.kCardPark"],
            [Blockly.Msg.SENTRY_CARD_GREEN_LIGHT, "sentry2_card_label_e.kCardGreenLight"],
            [Blockly.Msg.SENTRY_CARD_RED_LIGHT, "sentry2_card_label_e.kCardRedLight"],
            [Blockly.Msg.SENTRY_CARD_SPEED_40, "sentry2_card_label_e.kCardSpeed40"],
            [Blockly.Msg.SENTRY_CARD_SPEED_60, "sentry2_card_label_e.kCardSpeed60"],
            [Blockly.Msg.SENTRY_CARD_SPEED_80, "sentry2_card_label_e.kCardSpeed80"],
            [Blockly.Msg.SENTRY_CARD_CHECK, "sentry2_card_label_e.kCardCheck"],
            [Blockly.Msg.SENTRY_CARD_CROSS, "sentry2_card_label_e.kCardCross"],
            [Blockly.Msg.SENTRY_CARD_CIRCLE, "sentry2_card_label_e.kCardCircle"],
            [Blockly.Msg.SENTRY_CARD_SQUARE, "sentry2_card_label_e.kCardSquare"],
            [Blockly.Msg.SENTRY_CARD_TRIANGLE, "sentry2_card_label_e.kCardTriangle"],
            [Blockly.Msg.SENTRY_CARD_PLUS, "sentry2_card_label_e.kCardPlus"],
            [Blockly.Msg.SENTRY_CARD_MINUS, "sentry2_card_label_e.kCardMinus"],
            [Blockly.Msg.SENTRY_CARD_DIVIDE, "sentry2_card_label_e.kCardDivide"],
            [Blockly.Msg.SENTRY_CARD_EQUAL, "sentry2_card_label_e.kCardEqual"],
            [Blockly.Msg.SENTRY_CARD_1, "sentry2_card_label_e.kCardOne"],
            [Blockly.Msg.SENTRY_CARD_2, "sentry2_card_label_e.kCardTwo"],
            [Blockly.Msg.SENTRY_CARD_3, "sentry2_card_label_e.kCardThree"],
            [Blockly.Msg.SENTRY_CARD_4, "sentry2_card_label_e.kCardFour"],
            [Blockly.Msg.SENTRY_CARD_5, "sentry2_card_label_e.kCardFive"],
            [Blockly.Msg.SENTRY_CARD_6, "sentry2_card_label_e.kCardSix"],
            [Blockly.Msg.SENTRY_CARD_7, "sentry2_card_label_e.kCardSeven"],
            [Blockly.Msg.SENTRY_CARD_8, "sentry2_card_label_e.kCardEight"],
            [Blockly.Msg.SENTRY_CARD_9, "sentry2_card_label_e.kCardNine"],
            [Blockly.Msg.SENTRY_CARD_0, "sentry2_card_label_e.kCardZero"],
            [Blockly.Msg.SENTRY_CARD_A, "sentry2_card_label_e.kCardA"],
            [Blockly.Msg.SENTRY_CARD_B, "sentry2_card_label_e.kCardB"],
            [Blockly.Msg.SENTRY_CARD_C, "sentry2_card_label_e.kCardC"],
            [Blockly.Msg.SENTRY_CARD_D, "sentry2_card_label_e.kCardD"],
            [Blockly.Msg.SENTRY_CARD_E, "sentry2_card_label_e.kCardE"],
            [Blockly.Msg.SENTRY_CARD_F, "sentry2_card_label_e.kCardF"],
            [Blockly.Msg.SENTRY_CARD_G, "sentry2_card_label_e.kCardG"],
            [Blockly.Msg.SENTRY_CARD_H, "sentry2_card_label_e.kCardH"],
            [Blockly.Msg.SENTRY_CARD_I, "sentry2_card_label_e.kCardI"],
            [Blockly.Msg.SENTRY_CARD_J, "sentry2_card_label_e.kCardJ"],
            [Blockly.Msg.SENTRY_CARD_K, "sentry2_card_label_e.kCardK"],
            [Blockly.Msg.SENTRY_CARD_L, "sentry2_card_label_e.kCardL"],
            [Blockly.Msg.SENTRY_CARD_N, "sentry2_card_label_e.kCardM"],
            [Blockly.Msg.SENTRY_CARD_N, "sentry2_card_label_e.kCardN"],
            [Blockly.Msg.SENTRY_CARD_O, "sentry2_card_label_e.kCardO"],
            [Blockly.Msg.SENTRY_CARD_V, "sentry2_card_label_e.kCardP"],
            [Blockly.Msg.SENTRY_CARD_W, "sentry2_card_label_e.kCardQ"],
            [Blockly.Msg.SENTRY_CARD_R, "sentry2_card_label_e.kCardR"],
            [Blockly.Msg.SENTRY_CARD_S, "sentry2_card_label_e.kCardS"],
            [Blockly.Msg.SENTRY_CARD_T, "sentry2_card_label_e.kCardT"],
            [Blockly.Msg.SENTRY_CARD_U, "sentry2_card_label_e.kCardU"],
            [Blockly.Msg.SENTRY_CARD_V, "sentry2_card_label_e.kCardV"],
            [Blockly.Msg.SENTRY_CARD_W, "sentry2_card_label_e.kCardW"],
            [Blockly.Msg.SENTRY_CARD_X, "sentry2_card_label_e.kCardX"],
            [Blockly.Msg.SENTRY_CARD_Y, "sentry2_card_label_e.kCardY"],
            [Blockly.Msg.SENTRY_CARD_Z, "sentry2_card_label_e.kCardZ"],
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
      message0: Blockly.Msg.SENTRY2_DETECTEDCARD_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2Detected20Class"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,
      args0: [
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
      message0: Blockly.Msg.SENTRY2_DETECTED20CLASS_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2Rows"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,

      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY2_ROWS_MESSAGE0,
    });
  },
};

Blockly.Blocks["Sentry2Cols"] = {
  init: function () {
    this.jsonInit({
      colour: Sentry_RunMode_Color,

      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY2_COLS_MESSAGE0,
    });
  },
};