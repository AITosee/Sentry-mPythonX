'use strict';
goog.require('Blockly.Msg');

Blockly.Msg.CATEGORY_MORPX_MU_SETUP = 'MU Setup';
Blockly.Msg.CATEGORY_MORPX_MU_RUN = 'Run Module';
Blockly.Msg.CATEGORY_MORPX_MU_LIGHT_SENSOR = 'Light Sensor';
Blockly.Msg.CATEGORY_MORPX_MU_WIFI = 'WiFi Module';

// Help文本
Blockly.Msg.LKL_VS2_HELP_INIT_TOOLTIP = 'Initialize MU vision sensor, and choose the port.';

// 设置模块文本
Blockly.Msg.LKL_VS2_MU_INIT_MESSAGE0 = 'initialize %1 port %2';
Blockly.Msg.LKL_VS2_MU_RESET_MESSAGE0 = '%1 reset to default';
Blockly.Msg.LKL_VS2_MU_BEGIN_MESSAGE0 = '%1 %2 algorithm %3';
Blockly.Msg.LKL_VS2_MU_LED_SET_COLOR_MESSAGE0 = '%1 %2 when detected then %4 else %5 brightness(0~15) %3';
Blockly.Msg.LKL_VS2_MU_SET_VISION_LEVEL_MESSAGE0 = '%1 algorithm %2 level %3';
// Blockly.Msg.LKL_VS2_MU_SET_COLOR_RECOGNITION_REGION_MESSAGE0 = '%1 🌈 ColorRecognition set recognition region Width = %2 Height = %3';
// Blockly.Msg.LKL_VS2_MU_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0 = '%1 🌈 ColorBlock set min recognition size Width = %2 Height = %3';
Blockly.Msg.LKL_VS2_MU_SET_COLOR_RECOGNITION_REGION_MESSAGE0 = '%1 ColorRecognition set recognition region Width = %2 Height = %3';
Blockly.Msg.LKL_VS2_MU_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0 = '%1 ColorBlock set min recognition size Width = %2 Height = %3';
Blockly.Msg.LKL_VS2_MU_SET_VISION_ZOOM_MESSAGE0 = '%1 zoom %2';
Blockly.Msg.LKL_VS2_MU_SET_UART_BAUD_MESSAGE0 = '%1 UART baudrate %2';
Blockly.Msg.LKL_VS2_MU_SET_CAMERA_WHITE_BALANCE_MESSAGE0 = '%1 camera white balance %2';
Blockly.Msg.LKL_VS2_MU_SET_CAMERA_HFR_MESSAGE0 = '%1 high FPS mode %2';

// 运行模块文本
Blockly.Msg.LKL_VS2_MU_DETECTED_STATUS_MESSAGE0 = '%1 detected %2';
Blockly.Msg.LKL_VS2_MU_GET_COLOR_RCG_LABEL_MESSAGE0 = '%1 recognized coordinate x= %2 y= %3 color';
// Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_COLOR_MESSAGE0 = 'get %1 algorithm 🌈 ColorRecognition %2 value';
Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_COLOR_MESSAGE0 = 'get %1 algorithm ColorRecognition %2 value';
Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_MESSAGE0 = 'get %1 algorithm %2 %3 value';
// Blockly.Msg.LKL_VS2_MU_DETECTED_COLOR_DETECT_MESSAGE0 = '%1 algorithm 🌈 ColorBlock detected %2 color';
// Blockly.Msg.LKL_VS2_MU_GET_COLOR_LABEL_MESSAGE0 = 'get %1 algorithm 🌈 ColorRecognition color = %2';
// Blockly.Msg.LKL_VS2_MU_GET_SHAPE_CARD_TYPE_MESSAGE0 = 'get %1 algorithm 📐 ShapeCard type = %2';
// Blockly.Msg.LKL_VS2_MU_GET_TRAFFIC_CARD_TYPE_MESSAGE0 = 'get %1 algorithm 🚥 TrafficCard type = %2';
// Blockly.Msg.LKL_VS2_MU_GET_NUM_CARD_TYPE_MESSAGE0 = 'get %1 algorithm 🔢 NumberCard type = %2';
Blockly.Msg.LKL_VS2_MU_DETECTED_COLOR_DETECT_MESSAGE0 = '%1 algorithm ColorBlock detected %2 color';
Blockly.Msg.LKL_VS2_MU_GET_COLOR_LABEL_MESSAGE0 = 'get %1 algorithm ColorRecognition color = %2';
Blockly.Msg.LKL_VS2_MU_GET_SHAPE_CARD_TYPE_MESSAGE0 = 'get %1 algorithm ShapeCard type = %2';
Blockly.Msg.LKL_VS2_MU_GET_TRAFFIC_CARD_TYPE_MESSAGE0 = 'get %1 algorithm TrafficCard type = %2';
Blockly.Msg.LKL_VS2_MU_GET_NUM_CARD_TYPE_MESSAGE0 = 'get %1 algorithm NumberCard type = %2';

// Vision Enable Disable
Blockly.Msg.LKL_VS2_ENABLE = 'enable';
Blockly.Msg.LKL_VS2_DISABLE = 'disable';

// Vision type
// Blockly.Msg.LKL_VS2_VISION_COLOR_DETECT = '🌈 ColorBlock';
// Blockly.Msg.LKL_VS2_VISION_COLOR_RECOGNITION = '🌈 ColorRecognition';
// Blockly.Msg.LKL_VS2_VISION_BALL = '⚽ Ball';
// Blockly.Msg.LKL_VS2_VISION_BODY = '👨‍👩‍👦 Body';
// Blockly.Msg.LKL_VS2_VISION_SHAPE_CARD = '📐 ShapeCard';
// Blockly.Msg.LKL_VS2_VISION_TRAFFIC_CARD = '🚥 TrafficCard';
// Blockly.Msg.LKL_VS2_VISION_NUM_CARD = '🔢 NumberCard';
Blockly.Msg.LKL_VS2_VISION_COLOR_DETECT = 'ColorBlock';
Blockly.Msg.LKL_VS2_VISION_COLOR_RECOGNITION = 'ColorRecognition';
Blockly.Msg.LKL_VS2_VISION_BALL = 'Ball';
Blockly.Msg.LKL_VS2_VISION_BODY = 'Body';
Blockly.Msg.LKL_VS2_VISION_SHAPE_CARD = 'ShapeCard';
Blockly.Msg.LKL_VS2_VISION_TRAFFIC_CARD = 'TrafficCard';
Blockly.Msg.LKL_VS2_VISION_NUM_CARD = 'NumberCard';

// Blockly.LKL_VS2_VISION_COLOR_DETECT = '🌈 ColorBlock';
// Blockly.LKL_VS2_VISION_COLOR_RECOGNITION = '🌈 ColorRecognition';
// Blockly.LKL_VS2_VISION_BALL = '⚽ Ball';
// Blockly.LKL_VS2_VISION_BODY = '👨‍👩‍👦 Body';
// Blockly.LKL_VS2_VISION_SHAPE_CARD = '📐 ShapeCard';
// Blockly.LKL_VS2_VISION_TRAFFIC_CARD = '🚥 TrafficCard';
// Blockly.LKL_VS2_VISION_NUM_CARD = '🔢 NumberCard';
Blockly.LKL_VS2_VISION_COLOR_DETECT = 'ColorBlock';
Blockly.LKL_VS2_VISION_COLOR_RECOGNITION = 'ColorRecognition';
Blockly.LKL_VS2_VISION_BALL = 'Ball';
Blockly.LKL_VS2_VISION_BODY = 'Body';
Blockly.LKL_VS2_VISION_SHAPE_CARD = 'ShapeCard';
Blockly.LKL_VS2_VISION_TRAFFIC_CARD = 'TrafficCard';
Blockly.LKL_VS2_VISION_NUM_CARD = 'NumberCard';

// Vision Level
Blockly.Msg.LKL_VS2_LEVEL_DEFAULT = 'auto';
Blockly.Msg.LKL_VS2_LEVEL_SPEED = 'highSpeed';
Blockly.Msg.LKL_VS2_LEVEL_BALANCE = 'normal';
Blockly.Msg.LKL_VS2_LEVEL_ACCURACY = 'highAccuracy';

// Vision Zoom Type
Blockly.Msg.LKL_VS2_ZOOM_DEFAULT = 'auto';
Blockly.Msg.LKL_VS2_ZOOM_1 = 'level1';
Blockly.Msg.LKL_VS2_ZOOM_2 = 'level2';
Blockly.Msg.LKL_VS2_ZOOM_3 = 'level3';
Blockly.Msg.LKL_VS2_ZOOM_4 = 'level4';
Blockly.Msg.LKL_VS2_ZOOM_5 = 'level5';

// Vision White Balance Type
Blockly.Msg.LKL_VS2_AUTO = 'auto';
Blockly.Msg.LKL_VS2_LOCK_AWB = 'lockAWB';
Blockly.Msg.LKL_VS2_WHITE_LIGHT = 'WhiteLight';
Blockly.Msg.LKL_VS2_YELLOW_LIGHT = 'YellowLight';

// Vision State Value Type
Blockly.Msg.LKL_VS2_STATE_VALUE_X = 'Horizontal';
Blockly.Msg.LKL_VS2_STATE_VALUE_Y = 'Vertical';
Blockly.Msg.LKL_VS2_STATE_VALUE_WIDTH = 'Width';
Blockly.Msg.LKL_VS2_STATE_VALUE_HEIGHT = 'Height';
Blockly.Msg.LKL_VS2_STATE_VALUE_LABEL = 'Label';

Blockly.Msg.LKL_VS2_STATE_VALUE_R = 'ChannelR';
Blockly.Msg.LKL_VS2_STATE_VALUE_G = 'ChannelG';
Blockly.Msg.LKL_VS2_STATE_VALUE_B = 'ChannelB';

// Vision Shape Card Type
// Blockly.Msg.LKL_VS2_CARD_TICK = '✔️ Tick';
// Blockly.Msg.LKL_VS2_CARD_CROSS = '❌ Cross';
// Blockly.Msg.LKL_VS2_CARD_CIRCLE = '🟡 Circle';
// Blockly.Msg.LKL_VS2_CARD_SQUARE = '🟩 Square';
// Blockly.Msg.LKL_VS2_CARD_TRIANGLE = '🔺 Triangle';
Blockly.Msg.LKL_VS2_CARD_TICK = 'Tick';
Blockly.Msg.LKL_VS2_CARD_CROSS = 'Cross';
Blockly.Msg.LKL_VS2_CARD_CIRCLE = 'Circle';
Blockly.Msg.LKL_VS2_CARD_SQUARE = 'Square';
Blockly.Msg.LKL_VS2_CARD_TRIANGLE = 'Triangle';

// Vision Traffic Card Type
// Blockly.Msg.LKL_VS2_CARD_STRAIGHT = '⬆️ Straight';
// Blockly.Msg.LKL_VS2_CARD_TURN_LEFT = '⬅️ TurnLeft';
// Blockly.Msg.LKL_VS2_CARD_TURN_RIGHT = '➡️ TurnRight';
// Blockly.Msg.LKL_VS2_CARD_TURN_AROUND = '⬇️ TurnAround';
// Blockly.Msg.LKL_VS2_CARD_STOP = '🅿️ Stop';
Blockly.Msg.LKL_VS2_CARD_STRAIGHT = 'Straight';
Blockly.Msg.LKL_VS2_CARD_TURN_LEFT = 'TurnLeft';
Blockly.Msg.LKL_VS2_CARD_TURN_RIGHT = 'TurnRight';
Blockly.Msg.LKL_VS2_CARD_TURN_AROUND = 'TurnAround';
Blockly.Msg.LKL_VS2_CARD_STOP = 'Stop';

// Vision Color Type
Blockly.Msg.LKL_VS2_COLOR_BLACK = 'black';
Blockly.Msg.LKL_VS2_COLOR_WHITE = 'white';
Blockly.Msg.LKL_VS2_COLOR_RED = 'red';
Blockly.Msg.LKL_VS2_COLOR_YELLOW = 'yellow';
Blockly.Msg.LKL_VS2_COLOR_GREEN = 'green';
Blockly.Msg.LKL_VS2_COLOR_CYAN = 'cyan';
Blockly.Msg.LKL_VS2_COLOR_BLUE = 'blue';
Blockly.Msg.LKL_VS2_COLOR_PURPLE = 'purple';
Blockly.Msg.LKL_VS2_COLOR_UNKNOWN = 'unknown';

// LED color type
Blockly.Msg.LKL_VS2_LED_CLOSE = 'close';
Blockly.Msg.LKL_VS2_LED_RED = 'red';
Blockly.Msg.LKL_VS2_LED_GREEN = 'green';
Blockly.Msg.LKL_VS2_LED_YELLOW = 'yellow';
Blockly.Msg.LKL_VS2_LED_BLUE = 'blue';
Blockly.Msg.LKL_VS2_LED_PURPLE = 'purple';
Blockly.Msg.LKL_VS2_LED_CYAN = 'cyan';
Blockly.Msg.LKL_VS2_LED_WHITE = 'white';

// Mu Light Sensor Enable Disable
Blockly.Msg.LKL_VS2_LS_ENABLE = 'enable';
Blockly.Msg.LKL_VS2_LS_DISABLE = 'disable';

// Mu Light Sensor Type
Blockly.Msg.LKL_VS2_LS_PROXIMITY = 'proximity';
Blockly.Msg.LKL_VS2_LS_ALS = 'ambient light';
Blockly.Msg.LKL_VS2_LS_GESTURE_SENSOR = 'gesture';

// Mu Light Sensor Sensitivity Type
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_DEFAULT = 'default';
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_LOW = 'low';
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_MID = 'middle';
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_HIGH = 'high';

// Mu Light Sensor Gesture Type
Blockly.Msg.LKL_VS2_LS_GESTURE_UP = 'upward';
Blockly.Msg.LKL_VS2_LS_GESTURE_DOWN = 'downward';
Blockly.Msg.LKL_VS2_LS_GESTURE_LEFT = 'leftward';
Blockly.Msg.LKL_VS2_LS_GESTURE_RIGHT = 'rightward';
Blockly.Msg.LKL_VS2_LS_GESTURE_PUSH = 'push';
Blockly.Msg.LKL_VS2_LS_GESTURE_PULL = 'pull';

// Mu WiFi Mode Type
Blockly.Msg.LKL_VS2_STA = 'client';
Blockly.Msg.LKL_VS2_AP = 'hot-spot';