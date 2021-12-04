'use strict';
goog.require('Blockly.Msg');

Blockly.Msg.CATEGORY_MORPX_SENTRY_SETUP = '設置模塊';
Blockly.Msg.CATEGORY_MORPX_SENTRY_RUN = '運行模塊';

// Help文本
Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP = '初始化視覺傳感器，並選擇相關的地址';

// 設置模塊文本
Blockly.Msg.SENTRY_BEGIN_MESSAGE0 = '初始化 %1 端口 %2';
Blockly.Msg.SENTRY_SET_DEFAULT_MESSAGE0 = ' %1 恢復默認參數';
Blockly.Msg.SENTRY_VISION_SET_STATUS_MESSAGE0 = '%1 %2 算法 %3';
Blockly.Msg.SENTRY_SET_PARAMNUM_MESSAGE0 = '設置 %1 算法 %2 參數個數 %3';
Blockly.Msg.SENTRY_SET_PARAM_MESSAGE0 = '設置 %1 算法參數 %2 索引 %3';
Blockly.Msg.SENTRY_COLORPARAM_MESSAGE0 = '顏色識別 區域中心橫坐標 %1 縱坐標 %2 寬度 %3 高度 %4';
Blockly.Msg.SENTRY_BOLDPARAM_MESSAGE0 = '色塊檢測 最小寬度 %1 高度 %2 檢測標簽 %3';
Blockly.Msg.SENTRY_FACEPARAM_MESSAGE0 = '人臉標簽 %1';  
Blockly.Msg.SENTRY_LCD_SET_MODE_MESSAGE0 = '設置 %1 LCD 顯示 %2';
Blockly.Msg.SENTRY_LED_SET_COLOR_MESSAGE0 = '設置 %1 檢測到結果 %3 否則 %4 亮度(0~15) %2';
Blockly.Msg.SENTRY_CAMERA_SET_ZOOM_MESSAGE0 = '設置 %1 數碼變焦 %2';
Blockly.Msg.SENTRY_CAMERA_SET_ROTATE_MESSAGE0 = '設置 %1 攝像頭旋轉180° %2';
Blockly.Msg.SENTRY_CAMERA_SET_AWB_MESSAGE0 = '設置 %1 攝像頭白平衡 %2';
Blockly.Msg.SENTRY_CAMERA_SET_FPS_MESSAGE0 = '設置 %1 攝像頭高幀率模式 %2';
Blockly.Msg.SENTRY_CAMERA_SET_BRIGHTNESS_MESSAGE0 = '設置 %1 圖像亮度 %2';
Blockly.Msg.SENTRY_CAMERA_SET_CONTRAST_MESSAGE0 = '設置 %1 圖像對比度 %2';
Blockly.Msg.SENTRY_CAMERA_SET_SATURATION_MESSAGE0 = '設置 %1 圖像飽和度 %2';
Blockly.Msg.SENTRY_CAMERA_SET_SHAPRNESS_MESSAGE0 = '設置 %1 圖像銳化 %2';
Blockly.Msg.SENTRY_UART_SET_BAUDRATE_MESSAGE0 = '設置 %1 串口波特率 %2';
Blockly.Msg.SENTRY_DETECTED_MESSAGE0 = '%1 算法 %2 檢測結果數量';
Blockly.Msg.SENTRY_GET_VALUE_MESSAGE0 = '%1 算法 %2 結果 %3 索引 %4';
Blockly.Msg.SENTRY_COLORRCGVALUE_MESSAGE0 = '%1 顏色識別結果 %2 索引 %3';
Blockly.Msg.SENTRY_QRRCGVALUE_MESSAGE0 = ' %1 二維碼識別結果 %2';
Blockly.Msg.SENTRY_GET_QRCODEVALUE_MESSAGE0 = '%1 二維碼識別結果字符串';
Blockly.Msg.SENTRY_DETECTEDCOLOR_MESSAGE0 = '%1 顏色識別算法檢測到 %2 索引 %3';
Blockly.Msg.SENTRY_DETECTEDBLOB_MESSAGE0 = '%1 色塊檢測算法檢測到 %2 索引 %3';
Blockly.Msg.SENTRY_DETECTEDCARD_MESSAGE0 = '%1 卡片識別算法檢測到 %2 索引 %3';
Blockly.Msg.SENTRY_DETECTED20CLASS_MESSAGE0 = '%1 20分類識別算法檢測到 %2 索引 %3';
Blockly.Msg.SENTRY_ROWS_MESSAGE0 = '%1 圖像寬度';
Blockly.Msg.SENTRY_COLS_MESSAGE0 = '%1 圖像高度';

// Sentry Vision type
Blockly.Msg.SENTRY_VISION_VISIONCOLOR = '顏色識別';
Blockly.Msg.SENTRY_VISION_VISIONBLOB = '色塊檢測';
Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
Blockly.Msg.SENTRY_VISION_VISIONLINE = '線段檢測';
Blockly.Msg.SENTRY_VISION_VISIONLEARNING = '機器學習';
Blockly.Msg.SENTRY_VISION_VISIONCARD = '卡片識別';
Blockly.Msg.SENTRY_VISION_VISIONFACE = '人臉識別';
Blockly.Msg.SENTRY_VISION_VISION20CLASSES = '20分類識別';
Blockly.Msg.SENTRY_VISION_VISIONQRCODE = '二維碼識別';
Blockly.Msg.SENTRY_VISION_VISIONOBJTRACK = '物體訓練與追蹤';
Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT = '運動物體檢測';

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
Blockly.Msg.SENTRY_AUTO = '自動';
Blockly.Msg.SENTRY_LOCK_AWB = '鎖定白平衡';
Blockly.Msg.SENTRY_WHITE_LIGHT = '白光模式';
Blockly.Msg.SENTRY_YELLOW_LIGHT = '黃光模式';

// Sentry State Value Type
Blockly.Msg.SENTRY_STATE_VALUE_X = '橫向坐標';
Blockly.Msg.SENTRY_STATE_VALUE_Y = '縱向坐標';
Blockly.Msg.SENTRY_STATE_VALUE_WIDTH = '寬度';
Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT = '高度';
Blockly.Msg.SENTRY_STATE_VALUE_LABEL = '標簽';

Blockly.Msg.SENTRY_STATE_VALUE_R = '紅色通道';
Blockly.Msg.SENTRY_STATE_VALUE_G = '綠色通道';
Blockly.Msg.SENTRY_STATE_VALUE_B = '藍色通道';

// Sentry Color Type
Blockly.Msg.SENTRY_COLOR_BLACK = '黑色';
Blockly.Msg.SENTRY_COLOR_WHITE = '白色';
Blockly.Msg.SENTRY_COLOR_RED = '紅色';
Blockly.Msg.SENTRY_COLOR_GREEN = '綠色';
Blockly.Msg.SENTRY_COLOR_BLUE = '藍色';
Blockly.Msg.SENTRY_COLOR_YELLOW = '黃色';
Blockly.Msg.SENTRY_COLOR_UNKNOWN = '其他';

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

