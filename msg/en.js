'use strict';
goog.require('Blockly.Msg');

Blockly.Msg.CATEGORY_MORPX_SENTRY_SETUP = 'Settings';
Blockly.Msg.CATEGORY_MORPX_SENTRY_RUN = 'Running';

// Help文本
Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP = 'Initialize the vision sensor and select the relevant address';

Blockly.Msg.SENTRY_ABSOLUTE_COORDINATE = 'AbsoluteCoordinate'
Blockly.Msg.SENTRY_PERCENT_AGECOORDINATE = 'PercentageCoordinate'

// Sentry Enable Disable
Blockly.Msg.SENTRY_ENABLE = 'Enable';
Blockly.Msg.SENTRY_DISABLE = 'Disable';

// LED color type
Blockly.Msg.SENTRY_LED_CLOSE = 'Close';
Blockly.Msg.SENTRY_LED_RED = 'red';
Blockly.Msg.SENTRY_LED_GREEN = 'green';
Blockly.Msg.SENTRY_LED_YELLOW = 'yellow';
Blockly.Msg.SENTRY_LED_BLUE = 'blue';
Blockly.Msg.SENTRY_LED_PURPLE = 'purple';
Blockly.Msg.SENTRY_LED_CYAN = 'cyan';
Blockly.Msg.SENTRY_LED_WHITE = 'white';

// Sentry Config Level
Blockly.Msg.SENTRY_LEVEL_DEFAULT = 'Auto';
Blockly.Msg.SENTRY_LEVEL1 = 'Level1';
Blockly.Msg.SENTRY_LEVEL2 = 'Level2';
Blockly.Msg.SENTRY_LEVEL3 = 'Level3';
Blockly.Msg.SENTRY_LEVEL4 = 'Level4';
Blockly.Msg.SENTRY_LEVEL5 = 'Level5';
Blockly.Msg.SENTRY_LEVEL6 = 'Level6';
Blockly.Msg.SENTRY_LEVEL7 = 'Level7';
Blockly.Msg.SENTRY_LEVEL8 = 'Level8';
Blockly.Msg.SENTRY_LEVEL9 = 'Level9';
Blockly.Msg.SENTRY_LEVEL10 = 'Level10';

// Sentry Zoom Type
Blockly.Msg.SENTRY_ZOOM_DEFAULT = 'Default';
Blockly.Msg.SENTRY_ZOOM_1 = 'Level1';
Blockly.Msg.SENTRY_ZOOM_2 = 'Level2';
Blockly.Msg.SENTRY_ZOOM_3 = 'Level3';
Blockly.Msg.SENTRY_ZOOM_4 = 'Level4';
Blockly.Msg.SENTRY_ZOOM_5 = 'Level5';

// Sentry White Balance Type
Blockly.Msg.SENTRY_AWB_AUTO = 'AutoWhiteBalance';
Blockly.Msg.SENTRY_AWB_LOCK = 'LockWhiteBalance';
Blockly.Msg.SENTRY_AWB_WHITE_LIGHT = 'WhiteLight';
Blockly.Msg.SENTRY_AWB_YELLOW_LIGHT = 'YellowLight';

// Sentry State Value Type
Blockly.Msg.SENTRY_STATE_VALUE_X = 'x position';
Blockly.Msg.SENTRY_STATE_VALUE_Y = 'y position';
Blockly.Msg.SENTRY_STATE_VALUE_WIDTH = 'width';
Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT = 'height';
Blockly.Msg.SENTRY_STATE_VALUE_LABEL = 'label';

Blockly.Msg.SENTRY_STATE_VALUE_R = 'red channel';
Blockly.Msg.SENTRY_STATE_VALUE_G = 'green channel';
Blockly.Msg.SENTRY_STATE_VALUE_B = 'blue channel';

Blockly.Msg.SENTRY_STATE_LINE_EX = 'X coordinate of end point';
Blockly.Msg.SENTRY_STATE_LINE_EY = 'Y coordinate of end point';
Blockly.Msg.SENTRY_STATE_LINE_SX = 'X coordinate of starting point';
Blockly.Msg.SENTRY_STATE_LINE_SY = 'Y coordinate of starting point';
Blockly.Msg.SENTRY_STATE_LINE_A = 'inclination angle';

// Sentry Color Type
Blockly.Msg.SENTRY_COLOR_BLACK = 'Black';
Blockly.Msg.SENTRY_COLOR_WHITE = 'White';
Blockly.Msg.SENTRY_COLOR_RED = 'Red';
Blockly.Msg.SENTRY_COLOR_GREEN = 'Green';
Blockly.Msg.SENTRY_COLOR_BLUE = 'Blue';
Blockly.Msg.SENTRY_COLOR_YELLOW = 'Yellow';
Blockly.Msg.SENTRY_COLOR_UNKNOWN = 'Unkown';

// Sentry Vision type
Blockly.Msg.SENTRY_VISION_VISIONCOLOR = 'Color';
Blockly.Msg.SENTRY_VISION_VISIONBLOB = 'Blob';
Blockly.Msg.SENTRY_VISION_VISIONBALL = 'Ball';
Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
Blockly.Msg.SENTRY_VISION_VISIONLINE = 'Line';
Blockly.Msg.SENTRY_VISION_VISIONLEARNING = 'Learning';
Blockly.Msg.SENTRY_VISION_VISIONCARD = 'Card';
Blockly.Msg.SENTRY_VISION_VISIONBODY = 'Body';
Blockly.Msg.SENTRY_VISION_VISIONFACE = 'Face';
Blockly.Msg.SENTRY_VISION_VISION20CLASSES = '20Classes';
Blockly.Msg.SENTRY_VISION_VISIONQRCODE = 'QrCode';
Blockly.Msg.SENTRY_VISION_VISIONOBJTRACK = 'ObjTrack';
Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT = 'MotionDetect';

// Sentry 20 Class Type
Blockly.Msg.SENTRY_CLASS20_AIRPLANE = '✈️ Airplane';
Blockly.Msg.SENTRY_CLASS20_BICYCLE = '🚲 Bicycle';
Blockly.Msg.SENTRY_CLASS20_BIRD = '🐦 Bird';
Blockly.Msg.SENTRY_CLASS20_BOAT = '🚤 Boat';
Blockly.Msg.SENTRY_CLASS20_BOTTLE = '🍾 Bottle';
Blockly.Msg.SENTRY_CLASS20_BUS = ' 🚌 Bus';
Blockly.Msg.SENTRY_CLASS20_CAR = '🚗 Car';
Blockly.Msg.SENTRY_CLASS20_CAT = ' 🐱 Cat';
Blockly.Msg.SENTRY_CLASS20_CHAIR = '🪑 Chair';
Blockly.Msg.SENTRY_CLASS20_COW = '🐄 Cow';
Blockly.Msg.SENTRY_CLASS20_TABLE = '🔲 Table';
Blockly.Msg.SENTRY_CLASS20_DOG = '🐕 Dog';
Blockly.Msg.SENTRY_CLASS20_HORSE = '🐎 Horse';
Blockly.Msg.SENTRY_CLASS20_MOTORBIKE = '🏍️ MotorBike';
Blockly.Msg.SENTRY_CLASS20_PERSON = '🤵 Person';
Blockly.Msg.SENTRY_CLASS20_PLANT = '🪴 Plant';
Blockly.Msg.SENTRY_CLASS20_SHEEP = '🐏 Sheep';
Blockly.Msg.SENTRY_CLASS20_SOFA = '🛋 Sofa';
Blockly.Msg.SENTRY_CLASS20_TRAIN = '🚆 Train';
Blockly.Msg.SENTRY_CLASS20_MONITOR = '🖥️ Monitor';

// Sentry Card Type
Blockly.Msg.SENTRY_CARD_FORWARD = 'Forward';
Blockly.Msg.SENTRY_CARD_LEFT = 'Left';
Blockly.Msg.SENTRY_CARD_RIGHT = 'Right';
Blockly.Msg.SENTRY_CARD_TURN_AROUND = 'TurnAround';
Blockly.Msg.SENTRY_CARD_PARK = 'Park';
Blockly.Msg.SENTRY_CARD_GREEN_LIGHT = 'GreenLight';
Blockly.Msg.SENTRY_CARD_RED_LIGHT = 'RedLight';
Blockly.Msg.SENTRY_CARD_SPEED_40 = 'Speed40';
Blockly.Msg.SENTRY_CARD_SPEED_60 = 'Speed60';
Blockly.Msg.SENTRY_CARD_SPEED_80 = 'Speed80';
Blockly.Msg.SENTRY_CARD_CHECK = 'Check';
Blockly.Msg.SENTRY_CARD_CROSS = 'Cross';
Blockly.Msg.SENTRY_CARD_CIRCLE = 'Circle';
Blockly.Msg.SENTRY_CARD_SQUARE = 'Square';
Blockly.Msg.SENTRY_CARD_TRIANGLE = 'Triangle';
Blockly.Msg.SENTRY_CARD_PLUS = 'Plus';
Blockly.Msg.SENTRY_CARD_MINUS = 'Minus';
Blockly.Msg.SENTRY_CARD_DIVIDE = 'Divide';
Blockly.Msg.SENTRY_CARD_EQUAL = 'Equal';
Blockly.Msg.SENTRY_CARD_1 = '1';
Blockly.Msg.SENTRY_CARD_2 = '2';
Blockly.Msg.SENTRY_CARD_3 = '3';
Blockly.Msg.SENTRY_CARD_4 = '4';
Blockly.Msg.SENTRY_CARD_5 = '5';
Blockly.Msg.SENTRY_CARD_6 = '6';
Blockly.Msg.SENTRY_CARD_7 = '7';
Blockly.Msg.SENTRY_CARD_8 = '8';
Blockly.Msg.SENTRY_CARD_9 = '9';
Blockly.Msg.SENTRY_CARD_0 = '0';
Blockly.Msg.SENTRY_CARD_A = 'A';
Blockly.Msg.SENTRY_CARD_B = 'B';
Blockly.Msg.SENTRY_CARD_C = 'C';
Blockly.Msg.SENTRY_CARD_D = 'D';
Blockly.Msg.SENTRY_CARD_E = 'E';
Blockly.Msg.SENTRY_CARD_F = 'F';
Blockly.Msg.SENTRY_CARD_G = 'G';
Blockly.Msg.SENTRY_CARD_H = 'H';
Blockly.Msg.SENTRY_CARD_I = 'I';
Blockly.Msg.SENTRY_CARD_J = 'J';
Blockly.Msg.SENTRY_CARD_K = 'K';
Blockly.Msg.SENTRY_CARD_L = 'L';
Blockly.Msg.SENTRY_CARD_N = 'N';
Blockly.Msg.SENTRY_CARD_N = 'N';
Blockly.Msg.SENTRY_CARD_O = 'O';
Blockly.Msg.SENTRY_CARD_V = 'V';
Blockly.Msg.SENTRY_CARD_W = 'W';
Blockly.Msg.SENTRY_CARD_R = 'R';
Blockly.Msg.SENTRY_CARD_S = 'S';
Blockly.Msg.SENTRY_CARD_T = 'T';
Blockly.Msg.SENTRY_CARD_U = 'U';
Blockly.Msg.SENTRY_CARD_V = 'V';
Blockly.Msg.SENTRY_CARD_W = 'W';
Blockly.Msg.SENTRY_CARD_X = 'X';
Blockly.Msg.SENTRY_CARD_Y = 'Y';
Blockly.Msg.SENTRY_CARD_Z = 'Z';

Blockly.Msg.SENTRY_BALLTABLETENNIS = 'Table tennis';
Blockly.Msg.SENTRY_BALLTENNIS = 'Tennis';

// Sentry1模块文本
Blockly.Msg.SENTRY1_BEGIN_MESSAGE0 = 'initialize Sentry1 %1 mode %2';
Blockly.Msg.SENTRY1_SET_DEFAULT_MESSAGE0 = 'restore Sentry1 defaultsettings';
Blockly.Msg.SENTRY1_LED_SET_COLOR_MESSAGE0 = 'set Sentry1 LED detected %2 not detected %3 brightness(0~15) %1';
Blockly.Msg.SENTRY1_SET_COORD_TYPE_MESSAGE0 = 'set Sentry1 coordinate type %1';
Blockly.Msg.SENTRY1_VISION_SET_STATUS_MESSAGE0 = 'Sentry1 %1 algorithm %2';
Blockly.Msg.SENTRY1_SET_PARAMNUM_MESSAGE0 = 'set Sentry1 algorithm %1 param max num %2';
Blockly.Msg.SENTRY1_SET_PARAM_MESSAGE0 = 'set Sentry1 algorithm param %1 index %2';
Blockly.Msg.SENTRY1_COLORPARAM_MESSAGE0 = 'Color ROI centre x%1 y %2 weight %3 height %4';
Blockly.Msg.SENTRY1_BOLDPARAM_MESSAGE0 = 'Bold min weight %1 height %2 lable %3';
Blockly.Msg.SENTRY1_DETECTED_MESSAGE0 = 'Sentry1 algorithm %1 detected number';
Blockly.Msg.SENTRY1_GET_VALUE_MESSAGE0 = 'Sentry1 algorithm %1 Recognition %2 index %3';
Blockly.Msg.SENTRY1_LINEVALUE_MESSAGE0 = 'Sentry1 algorithm Line %1 index %2';
Blockly.Msg.SENTRY1_COLORRCGVALUE_MESSAGE0 = 'Sentry1 algorithm Color Recognition %1 index %2';
Blockly.Msg.SENTRY1_DETECTEDCOLOR_MESSAGE0 = 'Sentry1 algorithm Color %1 detected index %2';
Blockly.Msg.SENTRY1_DETECTEDBLOB_MESSAGE0 = 'Sentry1 algorithm Blob %1 detected index %2';
Blockly.Msg.SENTRY1_DETECTEDCARD_MESSAGE0 = 'Sentry1 algorithm Card %1 detected index %2';
Blockly.Msg.SENTRY1_DETECTEDBALL_MESSAGE0 = 'Sentry1 algorithm Ball %1 detected index %2';


// Sentry2模块文本
Blockly.Msg.SENTRY2_BEGIN_MESSAGE0 = 'initialize Sentry2 %1 mode %2';
Blockly.Msg.SENTRY2_SET_DEFAULT_MESSAGE0 = 'restore Sentry2 defaultsettings';
Blockly.Msg.SENTRY2_SET_COORD_TYPE_MESSAGE0 = 'set Sentry2 coordinate type %1';
Blockly.Msg.SENTRY2_VISION_SET_STATUS_MESSAGE0 = 'Sentry2 %1 algorithm %2';
Blockly.Msg.SENTRY2_SET_PARAMNUM_MESSAGE0 = 'set Sentry2 algorithm %1 param max num %2';
Blockly.Msg.SENTRY2_SET_PARAM_MESSAGE0 = 'set Sentry2 algorithm param %1 index %2';
Blockly.Msg.SENTRY2_COLORPARAM_MESSAGE0 = 'Color ROI centre x%1 y %2 weight %3 height %4';
Blockly.Msg.SENTRY2_BOLDPARAM_MESSAGE0 = 'Bold min weight %1 height %2 lable %3';
Blockly.Msg.SENTRY2_FACEPARAM_MESSAGE0 = 'Face lable %1';
Blockly.Msg.SENTRY2_DETECTED_MESSAGE0 = 'Sentry2 algorithm %1 detected number';
Blockly.Msg.SENTRY2_GET_VALUE_MESSAGE0 = 'Sentry2 algorithm %1 Recognition %2 index %3';
Blockly.Msg.SENTRY2_COLORRCGVALUE_MESSAGE0 = 'Sentry2 algorithm Color Recognition %1 index %2';
Blockly.Msg.SENTRY2_QRRCGVALUE_MESSAGE0 = 'Sentry2 QrCode Recognition  %1';
Blockly.Msg.SENTRY2_GET_QRCODEVALUE_MESSAGE0 = 'Sentry2 QrCode value';
Blockly.Msg.SENTRY2_LINEVALUE_MESSAGE0 = 'Sentry2 algorithm Line %1 index %2';
Blockly.Msg.SENTRY2_DETECTEDCOLOR_MESSAGE0 = 'Sentry2 algorithm Color %1 detected index %2';
Blockly.Msg.SENTRY2_DETECTEDBLOB_MESSAGE0 = 'Sentry2 algorithm Blob %1 detected index %2';
Blockly.Msg.SENTRY2_DETECTEDCARD_MESSAGE0 = 'Sentry2 algorithm card %1 detected index %2';
Blockly.Msg.SENTRY2_DETECTED20CLASS_MESSAGE0 = 'Sentry2 algorithm 20Class %1 detected index %2';
Blockly.Msg.SENTRY2_ROWS_MESSAGE0 = 'Sentry2 image width';
Blockly.Msg.SENTRY2_COLS_MESSAGE0 = 'Sentry2 image height';