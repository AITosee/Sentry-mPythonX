'use strict';
goog.require('Blockly.Msg');

Blockly.Msg.CATEGORY_MORPX_SENTRY_SETUP = '设置模块';
Blockly.Msg.CATEGORY_MORPX_SENTRY_RUN = '运行模块';

// Help文本
Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP = '初始化视觉传感器，并选择相关的地址';

// 设置模块文本
Blockly.Msg.SENTRY_INIT_MESSAGE0 = '初始化 %1 端口 %2';
Blockly.Msg.SENTRY_RESET_MESSAGE0 = '%1 恢复默认设置';
Blockly.Msg.SENTRY_BEGIN_MESSAGE0 = '%1 %2 算法 %3';
Blockly.Msg.SENTRY_LED_SET_COLOR_MESSAGE0 = '%1 %2 检测到结果 %4 否则 %5 亮度(0~15) %3';
Blockly.Msg.SENTRY_SET_VISION_LEVEL_MESSAGE0 = '%1 算法 %2 性能 %3';
// Blockly.Msg.SENTRY_SET_COLOR_RECOGNITION_REGION_MESSAGE0 = '%1 🌈 颜色识别 设置识别区域 宽度 = %2 高度 = %3';
Blockly.Msg.SENTRY_SET_COLOR_RECOGNITION_REGION_MESSAGE0 = '%1 颜色识别 设置识别区域 宽度 = %2 高度 = %3';
// Blockly.Msg.SENTRY_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0 = '%1 🌈 色块检测 设置最小识别尺寸 宽度 = %2 高度 = %3';
Blockly.Msg.SENTRY_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0 = '%1 色块检测 设置最小识别尺寸 宽度 = %2 高度 = %3';
Blockly.Msg.SENTRY_SET_VISION_ZOOM_MESSAGE0 = '%1 数码变焦 %2';
Blockly.Msg.SENTRY_SET_UART_BAUD_MESSAGE0 = '%1 串口波特率 %2';
Blockly.Msg.SENTRY_SET_CAMERA_WHITE_BALANCE_MESSAGE0 = '%1 摄像头白平衡 %2';
Blockly.Msg.SENTRY_SET_CAMERA_HFR_MESSAGE0 = '%1 高帧率模式 %2';

// 运行模块文本
Blockly.Msg.SENTRY_DETECTED_STATUS_MESSAGE0 = '%1 检测到 %2';
Blockly.Msg.SENTRY_GET_COLOR_RCG_LABEL_MESSAGE0 = '%1 识别到 坐标 x= %2 y= %3 颜色';
// Blockly.Msg.SENTRY_GET_MESSAGE_COLOR_MESSAGE0 = '获取 %1 算法 🌈 颜色识别 %2 值';
Blockly.Msg.SENTRY_GET_MESSAGE_COLOR_MESSAGE0 = '获取 %1 算法 颜色识别 %2 值';
Blockly.Msg.SENTRY_GET_MESSAGE_MESSAGE0 = '获取 %1 算法 %2 %3 值';
// Blockly.Msg.SENTRY_DETECTED_COLOR_DETECT_MESSAGE0 = '%1 算法 🌈 色块检测 检测到 %2 色块';
Blockly.Msg.SENTRY_DETECTED_COLOR_DETECT_MESSAGE0 = '%1 算法 色块检测 检测到 %2 色块';
// Blockly.Msg.SENTRY_GET_COLOR_LABEL_MESSAGE0 = '获取 %1 算法 🌈 颜色识别 颜色 = %2';
Blockly.Msg.SENTRY_GET_COLOR_LABEL_MESSAGE0 = '获取 %1 算法 颜色识别 颜色 = %2';
// Blockly.Msg.SENTRY_GET_SHAPE_CARD_TYPE_MESSAGE0 = '获取 %1 算法 📐 形状卡片 type = %2';
// Blockly.Msg.SENTRY_GET_TRAFFIC_CARD_TYPE_MESSAGE0 = '获取 %1 算法 🚥 交通卡片 type = %2';
// Blockly.Msg.SENTRY_GET_NUM_CARD_TYPE_MESSAGE0 = '获取 %1 算法 🔢 数字卡片 type = %2';
Blockly.Msg.SENTRY_GET_SHAPE_CARD_TYPE_MESSAGE0 = '获取 %1 算法 形状卡片 type = %2';
Blockly.Msg.SENTRY_GET_TRAFFIC_CARD_TYPE_MESSAGE0 = '获取 %1 算法 交通卡片 type = %2';
Blockly.Msg.SENTRY_GET_NUM_CARD_TYPE_MESSAGE0 = '获取 %1 算法 数字卡片 type = %2';

// Vision Enable Disable
Blockly.Msg.SENTRY_ENABLE = '启用';
Blockly.Msg.SENTRY_DISABLE = '关闭';

// Vision type
Blockly.Msg.SENTRY_VISION_COLOR_DETECT = '色块检测';
Blockly.Msg.SENTRY_VISION_COLOR_RECOGNITION = '颜色识别';
Blockly.Msg.SENTRY_VISION_BALL = '球体检测';
Blockly.Msg.SENTRY_VISION_BODY = '人体检测';
Blockly.Msg.SENTRY_VISION_SHAPE_CARD = '形状卡片';
Blockly.Msg.SENTRY_VISION_TRAFFIC_CARD = '交通卡片';
Blockly.Msg.SENTRY_VISION_NUM_CARD = '数字卡片';


Blockly.SENTRY_VISION_COLOR_DETECT = '色块检测';
Blockly.SENTRY_VISION_COLOR_RECOGNITION = '颜色识别';
Blockly.SENTRY_VISION_BALL = '球体检测';
Blockly.SENTRY_VISION_BODY = '人体检测';
Blockly.SENTRY_VISION_SHAPE_CARD = '形状卡片';
Blockly.SENTRY_VISION_TRAFFIC_CARD = '交通卡片';
Blockly.SENTRY_VISION_NUM_CARD = '数字卡片';

// Vision Level
Blockly.Msg.SENTRY_LEVEL_DEFAULT = '默认';
Blockly.Msg.SENTRY_LEVEL_SPEED = '速度优先';
Blockly.Msg.SENTRY_LEVEL_BALANCE = '均衡';
Blockly.Msg.SENTRY_LEVEL_ACCURACY = '准确率优先';

// Vision Zoom Type
Blockly.Msg.SENTRY_ZOOM_DEFAULT = '默认';
Blockly.Msg.SENTRY_ZOOM_1 = '等级1';
Blockly.Msg.SENTRY_ZOOM_2 = '等级2';
Blockly.Msg.SENTRY_ZOOM_3 = '等级3';
Blockly.Msg.SENTRY_ZOOM_4 = '等级4';
Blockly.Msg.SENTRY_ZOOM_5 = '等级5';

// Vision White Balance Type
Blockly.Msg.SENTRY_AUTO = '自动';
Blockly.Msg.SENTRY_LOCK_AWB = '锁定白平衡';
Blockly.Msg.SENTRY_WHITE_LIGHT = '白光模式';
Blockly.Msg.SENTRY_YELLOW_LIGHT = '黄光模式';

// Vision State Value Type
Blockly.Msg.SENTRY_STATE_VALUE_X = '横向坐标';
Blockly.Msg.SENTRY_STATE_VALUE_Y = '纵向坐标';
Blockly.Msg.SENTRY_STATE_VALUE_WIDTH = '宽度';
Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT = '高度';
Blockly.Msg.SENTRY_STATE_VALUE_LABEL = '标签';

Blockly.Msg.SENTRY_STATE_VALUE_R = '红色通道';
Blockly.Msg.SENTRY_STATE_VALUE_G = '绿色通道';
Blockly.Msg.SENTRY_STATE_VALUE_B = '蓝色通道';

// Vision Shape Card Type
Blockly.Msg.SENTRY_CARD_TICK = '钩';
Blockly.Msg.SENTRY_CARD_CROSS = '叉';
Blockly.Msg.SENTRY_CARD_CIRCLE = '圆形';
Blockly.Msg.SENTRY_CARD_SQUARE = '方形';
Blockly.Msg.SENTRY_CARD_TRIANGLE = '三角形';

// Vision Traffic Card Type
Blockly.Msg.SENTRY_CARD_STRAIGHT = '向前';
Blockly.Msg.SENTRY_CARD_TURN_LEFT = '向左';
Blockly.Msg.SENTRY_CARD_TURN_RIGHT = '向右';
Blockly.Msg.SENTRY_CARD_TURN_AROUND = '掉头';
Blockly.Msg.SENTRY_CARD_STOP = '停止';

// Vision Color Type
Blockly.Msg.SENTRY_COLOR_BLACK = '黑色';
Blockly.Msg.SENTRY_COLOR_WHITE = '白色';
Blockly.Msg.SENTRY_COLOR_RED = '红色';
Blockly.Msg.SENTRY_COLOR_YELLOW = '黄色';
Blockly.Msg.SENTRY_COLOR_GREEN = '绿色';
Blockly.Msg.SENTRY_COLOR_CYAN = '青色';
Blockly.Msg.SENTRY_COLOR_BLUE = '蓝色';
Blockly.Msg.SENTRY_COLOR_PURPLE = '紫色';
Blockly.Msg.SENTRY_COLOR_UNKNOWN = '其他';

// LED color type
Blockly.Msg.SENTRY_LED_CLOSE = '关闭';
Blockly.Msg.SENTRY_LED_RED = '红色';
Blockly.Msg.SENTRY_LED_GREEN = '绿色';
Blockly.Msg.SENTRY_LED_YELLOW = '黄色';
Blockly.Msg.SENTRY_LED_BLUE = '蓝色';
Blockly.Msg.SENTRY_LED_PURPLE = '紫色';
Blockly.Msg.SENTRY_LED_CYAN = '青色';
Blockly.Msg.SENTRY_LED_WHITE = '白色';