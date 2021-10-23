'use strict';
goog.require('Blockly.Msg');

Blockly.Msg.CATEGORY_MORPX_SENTRY_SETUP = '设置模块';
Blockly.Msg.CATEGORY_MORPX_SENTRY_RUN = '运行模块';

// Help文本
Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP = '初始化视觉传感器，并选择相关的地址';

// 设置模块文本
Blockly.Msg.SENTRY_BEGIN_MESSAGE0 = '初始化 %1 端口 %2';
Blockly.Msg.SENTRY_SET_DEFAULT_MESSAGE0 = ' %1 恢复默认参数';
Blockly.Msg.SENTRY_VISION_SET_STATUS_MESSAGE0 = '%1 %2 算法 %3';
Blockly.Msg.SENTRY_SET_PARAMNUM_MESSAGE0 = '设置 %1 算法 %2 参数个数 %3';
Blockly.Msg.SENTRY_SET_PARAM_MESSAGE0 = '设置 %1 算法 %2 参数 %3 索引 %4';
Blockly.Msg.SENTRY_COLORPARAM_MESSAGE0 = '颜色识别 区域中心横坐标 %1 纵坐标 %2 宽度 %3 高度 %4';
Blockly.Msg.SENTRY_BOLDPARAM_MESSAGE0 = '色块检测 最小宽度 %1 高度 %2 检测标签 %3';
Blockly.Msg.SENTRY_FACEPARAM_MESSAGE0 = '人脸标签 %1';  
Blockly.Msg.SENTRY_LCD_SET_MODE_MESSAGE0 = '设置 %1 LCD 显示 %2';
Blockly.Msg.SENTRY_LED_SET_COLOR_MESSAGE0 = '设置 %1 检测到结果 %3 否则 %4 亮度(0~15) %2';
Blockly.Msg.SENTRY_CAMERA_SET_ZOOM_MESSAGE0 = '设置 %1 数码变焦 %2';
Blockly.Msg.SENTRY_CAMERA_SET_ROTATE_MESSAGE0 = '设置 %1 摄像头旋转180° %2';
Blockly.Msg.SENTRY_CAMERA_SET_AWB_MESSAGE0 = '设置 %1 摄像头白平衡 %2';
Blockly.Msg.SENTRY_CAMERA_SET_FPS_MESSAGE0 = '设置 %1 摄像头高帧率模式 %2';
Blockly.Msg.SENTRY_CAMERA_SET_BRIGHTNESS_MESSAGE0 = '设置 %1 图像亮度 %2';
Blockly.Msg.SENTRY_CAMERA_SET_CONTRAST_MESSAGE0 = '设置 %1 图像对比度 %2';
Blockly.Msg.SENTRY_CAMERA_SET_SATURATION_MESSAGE0 = '设置 %1 图像饱和度 %2';
Blockly.Msg.SENTRY_CAMERA_SET_SHAPRNESS_MESSAGE0 = '设置 %1 图像锐化 %2';
Blockly.Msg.SENTRY_DETECTED_MESSAGE0 = '%1 算法 %2 检测结果数量';
Blockly.Msg.SENTRY_GET_VALUE_MESSAGE0 = '%1 算法 %2 结果 %3 索引 %4';
Blockly.Msg.SENTRY_COLORRCGVALUE_MESSAGE0 = '%1 颜色识别结果 %2 索引 %3';
Blockly.Msg.SENTRY_QRRCGVALUE_MESSAGE0 = ' %1 二维码识别结果 %2';
Blockly.Msg.SENTRY_GET_QRCODEVALUE_MESSAGE0 = '%1 二维码识别结果字符串';
Blockly.Msg.SENTRY_DETECTEDCOLOR_MESSAGE0 = '%1 颜色识别算法检测到 %2 索引 %3';
Blockly.Msg.SENTRY_DETECTEDBLOB_MESSAGE0 = '%1 色块检测算法检测到 %2 索引 %3';
Blockly.Msg.SENTRY_DETECTEDCARD_MESSAGE0 = '%1 卡片识别算法检测到 %2 索引 %3';
Blockly.Msg.SENTRY_DETECTED20CLASS_MESSAGE0 = '%1 20分类识别算法检测到 %2 索引 %3';
Blockly.Msg.SENTRY_ROWS_MESSAGE0 = '%1 图像宽度';
Blockly.Msg.SENTRY_COLS_MESSAGE0 = '%1 图像高度';

// Sentry Vision type
Blockly.Msg.SENTRY_VISION_VISIONCOLOR = '颜色识别';
Blockly.Msg.SENTRY_VISION_VISIONBLOB = '色块检测';
Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
Blockly.Msg.SENTRY_VISION_VISIONLINE = '线段检测';
Blockly.Msg.SENTRY_VISION_VISIONBODY = '人体识别';
Blockly.Msg.SENTRY_VISION_VISIONCARD = '卡片识别';
Blockly.Msg.SENTRY_VISION_VISIONFACE = '人脸识别';
Blockly.Msg.SENTRY_VISION_VISION20CLASSES = '20分类识别';
Blockly.Msg.SENTRY_VISION_VISIONQRCODE = '二维码识别';
Blockly.Msg.SENTRY_VISION_VISIONOBJTRACK = '物体训练与追踪';
Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT = '运动物体检测';

// Sentry Enable Disable
Blockly.Msg.SENTRY_ENABLE = '启用';
Blockly.Msg.SENTRY_DISABLE = '关闭';

// LED color type
Blockly.Msg.SENTRY_LED_CLOSE = '关闭';
Blockly.Msg.SENTRY_LED_RED = '红色';
Blockly.Msg.SENTRY_LED_GREEN = '绿色';
Blockly.Msg.SENTRY_LED_YELLOW = '黄色';
Blockly.Msg.SENTRY_LED_BLUE = '蓝色';
Blockly.Msg.SENTRY_LED_PURPLE = '紫色';
Blockly.Msg.SENTRY_LED_CYAN = '青色';
Blockly.Msg.SENTRY_LED_WHITE = '白色';

// Sentry Config Level
Blockly.Msg.SENTRY_LevelDefault = '自动';
Blockly.Msg.SENTRY_Level1 = '等级1';
Blockly.Msg.SENTRY_Level2 = '等级2';
Blockly.Msg.SENTRY_Level3 = '等级3';
Blockly.Msg.SENTRY_Level4 = '等级4';
Blockly.Msg.SENTRY_Level5 = '等级5';
Blockly.Msg.SENTRY_Level6 = '等级6';
Blockly.Msg.SENTRY_Level7 = '等级7';
Blockly.Msg.SENTRY_Level8 = '等级8';
Blockly.Msg.SENTRY_Level9 = '等级9';
Blockly.Msg.SENTRY_Level10 = '等级10';

// Sentry Zoom Type
Blockly.Msg.SENTRY_ZOOM_DEFAULT = '默认';
Blockly.Msg.SENTRY_ZOOM_1 = '等级1';
Blockly.Msg.SENTRY_ZOOM_2 = '等级2';
Blockly.Msg.SENTRY_ZOOM_3 = '等级3';
Blockly.Msg.SENTRY_ZOOM_4 = '等级4';
Blockly.Msg.SENTRY_ZOOM_5 = '等级5';

// Sentry White Balance Type
Blockly.Msg.SENTRY_AUTO = '自动';
Blockly.Msg.SENTRY_LOCK_AWB = '锁定白平衡';
Blockly.Msg.SENTRY_WHITE_LIGHT = '白光模式';
Blockly.Msg.SENTRY_YELLOW_LIGHT = '黄光模式';

// Sentry State Value Type
Blockly.Msg.SENTRY_STATE_VALUE_X = '横向坐标';
Blockly.Msg.SENTRY_STATE_VALUE_Y = '纵向坐标';
Blockly.Msg.SENTRY_STATE_VALUE_WIDTH = '宽度';
Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT = '高度';
Blockly.Msg.SENTRY_STATE_VALUE_LABEL = '标签';

Blockly.Msg.SENTRY_STATE_VALUE_R = '红色通道';
Blockly.Msg.SENTRY_STATE_VALUE_G = '绿色通道';
Blockly.Msg.SENTRY_STATE_VALUE_B = '蓝色通道';

// Sentry Color Type
Blockly.Msg.SENTRY_COLOR_BLACK = '黑色';
Blockly.Msg.SENTRY_COLOR_WHITE = '白色';
Blockly.Msg.SENTRY_COLOR_RED = '红色';
Blockly.Msg.SENTRY_COLOR_GREEN = '绿色';
Blockly.Msg.SENTRY_COLOR_BLUE = '蓝色';
Blockly.Msg.SENTRY_COLOR_YELLOW = '黄色';
Blockly.Msg.SENTRY_COLOR_UNKNOWN = '其他';

// Sentry 20 Class Type
Blockly.Msg.SENTRY_CLASS20_AIRPLANE = '✈️ 飞机';
Blockly.Msg.SENTRY_CLASS20_BICYCLE = '🚲 自行车';
Blockly.Msg.SENTRY_CLASS20_BIRD = '🐦 鸟';
Blockly.Msg.SENTRY_CLASS20_BOAT = '🚤 船';
Blockly.Msg.SENTRY_CLASS20_BOTTLE = '🍾 瓶子';
Blockly.Msg.SENTRY_CLASS20_BUS = ' 🚌 公交车';
Blockly.Msg.SENTRY_CLASS20_CAR = '🚗 小汽车';
Blockly.Msg.SENTRY_CLASS20_CAT = ' 🐱 猫';
Blockly.Msg.SENTRY_CLASS20_CHAIR = '🪑 椅子';
Blockly.Msg.SENTRY_CLASS20_COW = '🐄 奶牛';
Blockly.Msg.SENTRY_CLASS20_TABLE = '🔲 桌子';
Blockly.Msg.SENTRY_CLASS20_DOG = '🐕 狗';
Blockly.Msg.SENTRY_CLASS20_HORSE = '🐎 马';
Blockly.Msg.SENTRY_CLASS20_MOTORBIKE = '🏍️ 摩托车';
Blockly.Msg.SENTRY_CLASS20_PERSON = '🤵 人';
Blockly.Msg.SENTRY_CLASS20_PLANT = '🪴 植物';
Blockly.Msg.SENTRY_CLASS20_SHEEP = '🐏 羊';
Blockly.Msg.SENTRY_CLASS20_SOFA = '🛋 沙发';
Blockly.Msg.SENTRY_CLASS20_TRAIN = '🚆 火车';
Blockly.Msg.SENTRY_CLASS20_MONITOR = '🖥️ 显示器';



