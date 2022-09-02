'use strict';
goog.require('Blockly.Msg');

Blockly.Msg.CATEGORY_MORPX_SENTRY_SETUP = '設置模塊';
Blockly.Msg.CATEGORY_MORPX_SENTRY_RUN = '運行模塊';

// Help文本
Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP = '初始化視覺傳感器，併選擇相關的地址';

Blockly.Msg.SENTRY_ABSOLUTE_COORDINATE = '絕對坐標'
Blockly.Msg.SENTRY_PERCENT_AGECOORDINATE = '相對坐標'

// Sentry Enable Disable
Blockly.Msg.SENTRY_ENABLE = '啟用';
Blockly.Msg.SENTRY_DISABLE = '關閉';

// LED color type
Blockly.Msg.SENTRY_LED_CLOSE = '關閉';
Blockly.Msg.SENTRY_LED_RED = '紅色';
Blockly.Msg.SENTRY_LED_GREEN = '綠色';
Blockly.Msg.SENTRY_LED_YELLOW = '黃色';
Blockly.Msg.SENTRY_LED_BLUE = '藍色';
Blockly.Msg.SENTRY_LED_PURPLE = '紫色';
Blockly.Msg.SENTRY_LED_CYAN = '青色';
Blockly.Msg.SENTRY_LED_WHITE = '白色';

// Sentry Config Level
Blockly.Msg.SENTRY_LEVEL_DEFAULT = '自動';
Blockly.Msg.SENTRY_LEVEL1 = '等級1';
Blockly.Msg.SENTRY_LEVEL2 = '等級2';
Blockly.Msg.SENTRY_LEVEL3 = '等級3';
Blockly.Msg.SENTRY_LEVEL4 = '等級4';
Blockly.Msg.SENTRY_LEVEL5 = '等級5';
Blockly.Msg.SENTRY_LEVEL6 = '等級6';
Blockly.Msg.SENTRY_LEVEL7 = '等級7';
Blockly.Msg.SENTRY_LEVEL8 = '等級8';
Blockly.Msg.SENTRY_LEVEL9 = '等級9';
Blockly.Msg.SENTRY_LEVEL10 = '等級10';

// Sentry Zoom Type
Blockly.Msg.SENTRY_ZOOM_DEFAULT = '默認';
Blockly.Msg.SENTRY_ZOOM_1 = '等級1';
Blockly.Msg.SENTRY_ZOOM_2 = '等級2';
Blockly.Msg.SENTRY_ZOOM_3 = '等級3';
Blockly.Msg.SENTRY_ZOOM_4 = '等級4';
Blockly.Msg.SENTRY_ZOOM_5 = '等級5';

// Sentry White Balance Type
Blockly.Msg.SENTRY_AWB_AUTO = '自動';
Blockly.Msg.SENTRY_AWB_LOCK = '鎖定白平衡';
Blockly.Msg.SENTRY_AWB_WHITE_LIGHT = '白光模式';
Blockly.Msg.SENTRY_AWB_YELLOW_LIGHT = '黃光模式';

// Sentry State Value Type
Blockly.Msg.SENTRY_STATE_VALUE_X = '橫嚮坐標';
Blockly.Msg.SENTRY_STATE_VALUE_Y = '縱嚮坐標';
Blockly.Msg.SENTRY_STATE_VALUE_WIDTH = '寬度';
Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT = '高度';
Blockly.Msg.SENTRY_STATE_VALUE_LABEL = '標簽';

Blockly.Msg.SENTRY_STATE_VALUE_R = '紅色通道';
Blockly.Msg.SENTRY_STATE_VALUE_G = '綠色通道';
Blockly.Msg.SENTRY_STATE_VALUE_B = '藍色通道';

Blockly.Msg.SENTRY_STATE_LINE_EX = '線段終點X坐標';
Blockly.Msg.SENTRY_STATE_LINE_EY = '線段終點Y坐標';
Blockly.Msg.SENTRY_STATE_LINE_SX = '線段起點X坐標';
Blockly.Msg.SENTRY_STATE_LINE_SY = '線段起點Y坐標';
Blockly.Msg.SENTRY_STATE_LINE_A  = '線段的傾斜角度';
// Sentry Color Type
Blockly.Msg.SENTRY_COLOR_BLACK = '黑色';
Blockly.Msg.SENTRY_COLOR_WHITE = '白色';
Blockly.Msg.SENTRY_COLOR_RED = '紅色';
Blockly.Msg.SENTRY_COLOR_GREEN = '綠色';
Blockly.Msg.SENTRY_COLOR_BLUE = '藍色';
Blockly.Msg.SENTRY_COLOR_YELLOW = '黃色';
Blockly.Msg.SENTRY_COLOR_UNKNOWN = '其他';

// Sentry Vision type
Blockly.Msg.SENTRY_VISION_VISIONCOLOR = '顏色識別';
Blockly.Msg.SENTRY_VISION_VISIONBLOB = '色塊檢測';
Blockly.Msg.SENTRY_VISION_VISIONBALL = '球體檢測';
Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
Blockly.Msg.SENTRY_VISION_VISIONLINE = '線段檢測';
Blockly.Msg.SENTRY_VISION_VISIONLEARNING = '機器學習';
Blockly.Msg.SENTRY_VISION_VISIONCARD = '卡片識別';
Blockly.Msg.SENTRY_VISION_VISIONBODY = '人體檢測';
Blockly.Msg.SENTRY_VISION_VISIONFACE = '人臉識別';
Blockly.Msg.SENTRY_VISION_VISION20CLASSES = '20分類識別';
Blockly.Msg.SENTRY_VISION_VISIONQRCODE = '二維碼識別';
Blockly.Msg.SENTRY_VISION_VISIONOBJTRACK = '物體訓練與追蹤';
Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT = '運動物體檢測';


// Sentry 20 Class Type
Blockly.Msg.SENTRY_CLASS20_AIRPLANE = '✈️ 飛機';
Blockly.Msg.SENTRY_CLASS20_BICYCLE = '🚲 自行車';
Blockly.Msg.SENTRY_CLASS20_BIRD = '🐦 鳥';
Blockly.Msg.SENTRY_CLASS20_BOAT = '🚤 船';
Blockly.Msg.SENTRY_CLASS20_BOTTLE = '🍾 瓶子';
Blockly.Msg.SENTRY_CLASS20_BUS = ' 🚌 公交車';
Blockly.Msg.SENTRY_CLASS20_CAR = '🚗 小汽車';
Blockly.Msg.SENTRY_CLASS20_CAT = ' 🐱 貓';
Blockly.Msg.SENTRY_CLASS20_CHAIR = '🪑 椅子';
Blockly.Msg.SENTRY_CLASS20_COW = '🐄 奶牛';
Blockly.Msg.SENTRY_CLASS20_TABLE = '🔲 桌子';
Blockly.Msg.SENTRY_CLASS20_DOG = '🐕 狗';
Blockly.Msg.SENTRY_CLASS20_HORSE = '🐎 馬';
Blockly.Msg.SENTRY_CLASS20_MOTORBIKE = '🏍️ 摩托車';
Blockly.Msg.SENTRY_CLASS20_PERSON = '🤵 人';
Blockly.Msg.SENTRY_CLASS20_PLANT = '🪴 植物';
Blockly.Msg.SENTRY_CLASS20_SHEEP = '🐏 羊';
Blockly.Msg.SENTRY_CLASS20_SOFA = '🛋 沙發';
Blockly.Msg.SENTRY_CLASS20_TRAIN = '🚆 火車';
Blockly.Msg.SENTRY_CLASS20_MONITOR = '🖥️ 顯示器';

// Sentry Card Type
Blockly.Msg.SENTRY_CARD_FORWARD = '前進';
Blockly.Msg.SENTRY_CARD_LEFT = '左';
Blockly.Msg.SENTRY_CARD_RIGHT = '右';
Blockly.Msg.SENTRY_CARD_TURN_AROUND = '掉頭';
Blockly.Msg.SENTRY_CARD_PARK = '暫停';
Blockly.Msg.SENTRY_CARD_GREEN_LIGHT = '綠燈';
Blockly.Msg.SENTRY_CARD_RED_LIGHT = '紅燈';
Blockly.Msg.SENTRY_CARD_SPEED_40 = '速度40';
Blockly.Msg.SENTRY_CARD_SPEED_60 = '速度60';
Blockly.Msg.SENTRY_CARD_SPEED_80 = '速度80';
Blockly.Msg.SENTRY_CARD_CHECK = '叉號';
Blockly.Msg.SENTRY_CARD_CROSS = '十字';
Blockly.Msg.SENTRY_CARD_CIRCLE = '圓圈';
Blockly.Msg.SENTRY_CARD_SQUARE = '正方形';
Blockly.Msg.SENTRY_CARD_TRIANGLE = '三角形';
Blockly.Msg.SENTRY_CARD_PLUS = '+';
Blockly.Msg.SENTRY_CARD_MINUS = '-';
Blockly.Msg.SENTRY_CARD_DIVIDE = '~';
Blockly.Msg.SENTRY_CARD_EQUAL = '=';
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


Blockly.Msg.SENTRY_BALLTABLETENNIS = '乒乓球';
Blockly.Msg.SENTRY_BALLTENNIS = '網球';

// Sentry1模塊文本
Blockly.Msg.SENTRY1_BEGIN_MESSAGE0 = '初始化 Sentry1 端口 %1 地址 %2';
Blockly.Msg.SENTRY1_SET_DEFAULT_MESSAGE0 = ' Sentry1 恢復默認參數';
Blockly.Msg.SENTRY1_VISION_SET_STATUS_MESSAGE0 = 'Sentry1 %1 算法 %2';
Blockly.Msg.SENTRY1_SET_PARAMNUM_MESSAGE0 = '設置 Sentry1 算法 %1 參數個數 %2';
Blockly.Msg.SENTRY1_COLORPARAM_MESSAGE0 = '設置 Sentry1 算法 %1 區域中心橫坐標 %2 縱坐標 %3 寬度 %4 高度 %5 索引 %6';
Blockly.Msg.SENTRY1_BOLDPARAM_MESSAGE0 = '設置 Sentry1 算法 %1 最小寬度 %2 高度 %3 檢測標簽 %4 索引 %5';
Blockly.Msg.SENTRY1_LED_SET_COLOR_MESSAGE0 = '設置 Sentry1 檢測到結果 %2 否則 %3 亮度(0~15) %1';
Blockly.Msg.SENTRY1_CAMERA_SET_ZOOM_MESSAGE0 = '設置 Sentry1 數碼變焦 %1';
Blockly.Msg.SENTRY1_CAMERA_SET_ROTATE_MESSAGE0 = '設置 Sentry1 攝像頭旋轉180° %1';
Blockly.Msg.SENTRY1_CAMERA_SET_AWB_MESSAGE0 = '設置 Sentry1 攝像頭白平衡 %1';
Blockly.Msg.SENTRY1_CAMERA_SET_FPS_MESSAGE0 = '設置 Sentry1 攝像頭高幀率模式 %1';
Blockly.Msg.SENTRY1_CAMERA_SET_BRIGHTNESS_MESSAGE0 = '設置 Sentry1 圖像亮度 %1';
Blockly.Msg.SENTRY1_CAMERA_SET_CONTRAST_MESSAGE0 = '設置 Sentry1 圖像對比度 %1';
Blockly.Msg.SENTRY1_CAMERA_SET_SATURATION_MESSAGE0 = '設置 Sentry1 圖像飽和度 %1';
Blockly.Msg.SENTRY1_CAMERA_SET_SHAPRNESS_MESSAGE0 = '設置 Sentry1 圖像銳化 %1';
Blockly.Msg.SENTRY1_UART_SET_BAUDRATE_MESSAGE0 = '設置 Sentry1 串口波特率 %1';
Blockly.Msg.SENTRY1_DETECTED_MESSAGE0 = 'Sentry1 算法 %1 檢測結果數量';
Blockly.Msg.SENTRY1_GET_VALUE_MESSAGE0 = 'Sentry1 算法 %1 結果 %2 索引 %3';
Blockly.Msg.SENTRY1_COLORRCGVALUE_MESSAGE0 = 'Sentry1 顏色識別結果 %1 索引 %2';
Blockly.Msg.SENTRY1_LINEVALUE_MESSAGE0 = 'Sentry1 線段檢測結果 %1 索引 %2';
Blockly.Msg.SENTRY1_DETECTEDCOLOR_MESSAGE0 = 'Sentry1 顏色識別算法檢測到 %1 索引 %2';
Blockly.Msg.SENTRY1_DETECTEDBLOB_MESSAGE0 = 'Sentry1 色塊檢測算法檢測到 %1 索引 %2';
Blockly.Msg.SENTRY1_DETECTEDCARD_MESSAGE0 = 'Sentry1 卡片識別算法檢測到 %1 索引 %2';
Blockly.Msg.SENTRY1_DETECTED20CLASS_MESSAGE0 = 'Sentry1 20分類識別算法檢測到 %1 索引 %2';
Blockly.Msg.SENTRY1_DETECTEDBALL_MESSAGE0 = 'Sentry1 球體檢測別算法檢測到 %1 索引 %2';
Blockly.Msg.SENTRY1_ROWS_MESSAGE0 = 'Sentry1 圖像寬度';
Blockly.Msg.SENTRY1_COLS_MESSAGE0 = 'Sentry1 圖像高度';


// Sentry2模塊文本
Blockly.Msg.SENTRY2_BEGIN_MESSAGE0 = '初始化 Sentry2 端口 %1 地址 %2';
Blockly.Msg.SENTRY2_SET_DEFAULT_MESSAGE0 = ' Sentry2 恢復默認參數';
Blockly.Msg.SENTRY2_VISION_SET_STATUS_MESSAGE0 = 'Sentry2 %1 算法 %2';
Blockly.Msg.SENTRY2_SET_PARAMNUM_MESSAGE0 = '設置 Sentry2 算法 %1 參數個數 %2';
Blockly.Msg.SENTRY2_COLORPARAM_MESSAGE0 = '設置 Sentry2 算法 %1 區域中心橫坐標 %2 縱坐標 %3 寬度 %4 高度 %5 索引 %6';
Blockly.Msg.SENTRY2_BOLDPARAM_MESSAGE0 = '設置 Sentry2 算法 %1 最小寬度 %2 高度 %3 檢測標簽 %4 索引 %5';
Blockly.Msg.SENTRY2_LCD_SET_MODE_MESSAGE0 = '設置 Sentry2 LCD 顯示 %1';
Blockly.Msg.SENTRY2_LED_SET_COLOR_MESSAGE0 = '設置 Sentry2 檢測到結果 %2 否則 %3 亮度(0~15) %1';
Blockly.Msg.SENTRY2_CAMERA_SET_ZOOM_MESSAGE0 = '設置 Sentry2 數碼變焦 %1';
Blockly.Msg.SENTRY2_CAMERA_SET_ROTATE_MESSAGE0 = '設置 Sentry2 攝像頭旋轉180° %1';
Blockly.Msg.SENTRY2_CAMERA_SET_AWB_MESSAGE0 = '設置 Sentry2 攝像頭白平衡 %1';
Blockly.Msg.SENTRY2_CAMERA_SET_FPS_MESSAGE0 = '設置 Sentry2 攝像頭高幀率模式 %1';
Blockly.Msg.SENTRY2_CAMERA_SET_BRIGHTNESS_MESSAGE0 = '設置 Sentry2 圖像亮度 %1';
Blockly.Msg.SENTRY2_CAMERA_SET_CONTRAST_MESSAGE0 = '設置 Sentry2 圖像對比度 %1';
Blockly.Msg.SENTRY2_CAMERA_SET_SATURATION_MESSAGE0 = '設置 Sentry2 圖像飽和度 %1';
Blockly.Msg.SENTRY2_CAMERA_SET_SHAPRNESS_MESSAGE0 = '設置 Sentry2 圖像銳化 %1';
Blockly.Msg.SENTRY2_UART_SET_BAUDRATE_MESSAGE0 = '設置 Sentry2 串口波特率 %1';
Blockly.Msg.SENTRY2_DETECTED_MESSAGE0 = 'Sentry2 算法 %1 檢測結果數量';
Blockly.Msg.SENTRY2_GET_VALUE_MESSAGE0 = 'Sentry2 算法 %1 結果 %2 索引 %3';
Blockly.Msg.SENTRY2_COLORRCGVALUE_MESSAGE0 = 'Sentry2 顏色識別結果 %1 索引 %2';
Blockly.Msg.SENTRY2_QRRCGVALUE_MESSAGE0 = ' Sentry2 二維碼識別結果 %1';
Blockly.Msg.SENTRY2_GET_QRCODEVALUE_MESSAGE0 = 'Sentry2 二維碼識別結果字符串';
Blockly.Msg.SENTRY2_LINEVALUE_MESSAGE0 = 'Sentry2 線段檢測結果 %1 索引 %2';
Blockly.Msg.SENTRY2_DETECTEDCOLOR_MESSAGE0 = 'Sentry2 顏色識別算法檢測到 %1 索引 %2';
Blockly.Msg.SENTRY2_DETECTEDBLOB_MESSAGE0 = 'Sentry2 色塊檢測算法檢測到 %1 索引 %2';
Blockly.Msg.SENTRY2_DETECTEDCARD_MESSAGE0 = 'Sentry2 卡片識別算法檢測到 %1 索引 %2';
Blockly.Msg.SENTRY2_DETECTED20CLASS_MESSAGE0 = 'Sentry2 20分類識別算法檢測到 %1 索引 %2';
Blockly.Msg.SENTRY2_ROWS_MESSAGE0 = 'Sentry2 圖像寬度';
Blockly.Msg.SENTRY2_COLS_MESSAGE0 = 'Sentry2 圖像高度';


