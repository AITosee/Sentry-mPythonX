'use strict';
goog.require('Blockly.Msg');

Blockly.Msg.CATEGORY_MORPX_SENTRY_SETUP = '设置模块';
Blockly.Msg.CATEGORY_MORPX_SENTRY_RUN = '运行模块';

// Help文本
Blockly.Msg.LKL_VS2_HELP_INIT_TOOLTIP = '初始化视觉传感器，并选择相关的地址';

// 设置模块文本
Blockly.Msg.LKL_VS2_MU_INIT_MESSAGE0 = '初始化 %1 端口 %2';
Blockly.Msg.LKL_VS2_MU_RESET_MESSAGE0 = '%1 恢复默认设置';
Blockly.Msg.LKL_VS2_MU_BEGIN_MESSAGE0 = '%1 %2 算法 %3';
Blockly.Msg.LKL_VS2_MU_LED_SET_COLOR_MESSAGE0 = '%1 %2 检测到结果 %4 否则 %5 亮度(0~15) %3';
Blockly.Msg.LKL_VS2_MU_SET_VISION_LEVEL_MESSAGE0 = '%1 算法 %2 性能 %3';
// Blockly.Msg.LKL_VS2_MU_SET_COLOR_RECOGNITION_REGION_MESSAGE0 = '%1 🌈 颜色识别 设置识别区域 宽度 = %2 高度 = %3';
Blockly.Msg.LKL_VS2_MU_SET_COLOR_RECOGNITION_REGION_MESSAGE0 = '%1 颜色识别 设置识别区域 宽度 = %2 高度 = %3';
// Blockly.Msg.LKL_VS2_MU_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0 = '%1 🌈 色块检测 设置最小识别尺寸 宽度 = %2 高度 = %3';
Blockly.Msg.LKL_VS2_MU_SET_COLOR_BLOCK_MIN_BLOB_MESSAGE0 = '%1 色块检测 设置最小识别尺寸 宽度 = %2 高度 = %3';
Blockly.Msg.LKL_VS2_MU_SET_VISION_ZOOM_MESSAGE0 = '%1 数码变焦 %2';
Blockly.Msg.LKL_VS2_MU_SET_UART_BAUD_MESSAGE0 = '%1 串口波特率 %2';
Blockly.Msg.LKL_VS2_MU_SET_CAMERA_WHITE_BALANCE_MESSAGE0 = '%1 摄像头白平衡 %2';
Blockly.Msg.LKL_VS2_MU_SET_CAMERA_HFR_MESSAGE0 = '%1 高帧率模式 %2';

// 运行模块文本
Blockly.Msg.LKL_VS2_MU_DETECTED_STATUS_MESSAGE0 = '%1 检测到 %2';
Blockly.Msg.LKL_VS2_MU_GET_COLOR_RCG_LABEL_MESSAGE0 = '%1 识别到 坐标 x= %2 y= %3 颜色';
// Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_COLOR_MESSAGE0 = '获取 %1 算法 🌈 颜色识别 %2 值';
Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_COLOR_MESSAGE0 = '获取 %1 算法 颜色识别 %2 值';
Blockly.Msg.LKL_VS2_MU_GET_MESSAGE_MESSAGE0 = '获取 %1 算法 %2 %3 值';
// Blockly.Msg.LKL_VS2_MU_DETECTED_COLOR_DETECT_MESSAGE0 = '%1 算法 🌈 色块检测 检测到 %2 色块';
Blockly.Msg.LKL_VS2_MU_DETECTED_COLOR_DETECT_MESSAGE0 = '%1 算法 色块检测 检测到 %2 色块';
// Blockly.Msg.LKL_VS2_MU_GET_COLOR_LABEL_MESSAGE0 = '获取 %1 算法 🌈 颜色识别 颜色 = %2';
Blockly.Msg.LKL_VS2_MU_GET_COLOR_LABEL_MESSAGE0 = '获取 %1 算法 颜色识别 颜色 = %2';
// Blockly.Msg.LKL_VS2_MU_GET_SHAPE_CARD_TYPE_MESSAGE0 = '获取 %1 算法 📐 形状卡片 type = %2';
// Blockly.Msg.LKL_VS2_MU_GET_TRAFFIC_CARD_TYPE_MESSAGE0 = '获取 %1 算法 🚥 交通卡片 type = %2';
// Blockly.Msg.LKL_VS2_MU_GET_NUM_CARD_TYPE_MESSAGE0 = '获取 %1 算法 🔢 数字卡片 type = %2';
Blockly.Msg.LKL_VS2_MU_GET_SHAPE_CARD_TYPE_MESSAGE0 = '获取 %1 算法 形状卡片 type = %2';
Blockly.Msg.LKL_VS2_MU_GET_TRAFFIC_CARD_TYPE_MESSAGE0 = '获取 %1 算法 交通卡片 type = %2';
Blockly.Msg.LKL_VS2_MU_GET_NUM_CARD_TYPE_MESSAGE0 = '获取 %1 算法 数字卡片 type = %2';

// 光线传感器模块文本
// Blockly.Msg.LKL_VS2_MU_LS_BEGIN_MESSAGE0 = '%1 ⚡️ 光线传感器 %2 %3';
// Blockly.Msg.LKL_VS2_MU_LS_SET_SENSITIVITY_MESSAGE0 = '%1 ⚡️ 光线传感器 设置 灵敏度 %2';
// Blockly.Msg.LKL_VS2_MU_LS_WHITE_BALANCE_ENABLE_MESSAGE0 = '%1 ⚡️ 光线传感器 校准白平衡';
// Blockly.Msg.LKL_VS2_MU_LS_READ_PROXIMITY_MESSAGE0 = '%1 ⚡️ 光线传感器 读取 接近检测';
// Blockly.Msg.LKL_VS2_MU_LS_DETECTED_GESTURE_MESSAGE0 = '%1 ⚡️ 光线传感器 读取一次手势';
// Blockly.Msg.LKL_VS2_MU_LS_DETECTED_GESTURE_TYPE_MESSAGE0 = '%1 ⚡️ 光线传感器 手势 = %2';
Blockly.Msg.LKL_VS2_MU_LS_BEGIN_MESSAGE0 = '%1 光线传感器 %2 %3';
Blockly.Msg.LKL_VS2_MU_LS_SET_SENSITIVITY_MESSAGE0 = '%1 光线传感器 设置 灵敏度 %2';
Blockly.Msg.LKL_VS2_MU_LS_WHITE_BALANCE_ENABLE_MESSAGE0 = '%1 光线传感器 校准白平衡';
Blockly.Msg.LKL_VS2_MU_LS_READ_PROXIMITY_MESSAGE0 = '%1 光线传感器 读取 接近检测';
Blockly.Msg.LKL_VS2_MU_LS_READ_AMBIENT_LIGHT_MESSAGE0 = '%1 光线传感器 读取 环境光检测';
Blockly.Msg.LKL_VS2_MU_LS_DETECTED_GESTURE_MESSAGE0 = '%1 光线传感器 读取一次手势';
Blockly.Msg.LKL_VS2_MU_LS_DETECTED_GESTURE_TYPE_MESSAGE0 = '%1 光线传感器 手势 = %2';

// WiFi模块文本
Blockly.Msg.LKL_VS2_MU_AT_WIFI_INIT_MESSAGE0 = 'MU WiFi 初始化 端口 %1';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_SET_MESSAGE0 = 'MU WiFi 设置 名称 %1 密码 %2 模式 %3';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_CON_MESSAGE0 = 'MU WiFi 连接成功？';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_DISCON_MESSAGE0 = 'MU WiFi 断开连接';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_UDP_MESSAGE0 = 'MU WiFi 设置 目标IP %1 端口 %2';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_CIP_MESSAGE0 = 'MU WiFi 读取 目标IP';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_SIP_MESSAGE0 = 'MU WiFi 读取 本地IP';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_READ_MESSAGE0 = 'MU WiFi 读取';
Blockly.Msg.LKL_VS2_MU_AT_WIFI_WRITE_MESSAGE0 = 'MU WiFi 写入 %1';

// Vision Enable Disable
Blockly.Msg.LKL_VS2_ENABLE = '启用';
Blockly.Msg.LKL_VS2_DISABLE = '关闭';

// Vision type
// Blockly.Msg.LKL_VS2_VISION_COLOR_DETECT = '🌈 色块检测';
// Blockly.Msg.LKL_VS2_VISION_COLOR_RECOGNITION = '🌈 颜色识别';
// Blockly.Msg.LKL_VS2_VISION_BALL = '⚽ 球体检测';
// Blockly.Msg.LKL_VS2_VISION_BODY = '👨‍👩‍👦 人体检测';
// Blockly.Msg.LKL_VS2_VISION_SHAPE_CARD = '📐 形状卡片';
// Blockly.Msg.LKL_VS2_VISION_TRAFFIC_CARD = '🚥 交通卡片';
// Blockly.Msg.LKL_VS2_VISION_NUM_CARD = '🔢 数字卡片';
Blockly.Msg.LKL_VS2_VISION_COLOR_DETECT = '色块检测';
Blockly.Msg.LKL_VS2_VISION_COLOR_RECOGNITION = '颜色识别';
Blockly.Msg.LKL_VS2_VISION_BALL = '球体检测';
Blockly.Msg.LKL_VS2_VISION_BODY = '人体检测';
Blockly.Msg.LKL_VS2_VISION_SHAPE_CARD = '形状卡片';
Blockly.Msg.LKL_VS2_VISION_TRAFFIC_CARD = '交通卡片';
Blockly.Msg.LKL_VS2_VISION_NUM_CARD = '数字卡片';

// Blockly.LKL_VS2_VISION_COLOR_DETECT = '🌈 色块检测';
// Blockly.LKL_VS2_VISION_COLOR_RECOGNITION = '🌈 颜色识别';
// Blockly.LKL_VS2_VISION_BALL = '⚽ 球体检测';
// Blockly.LKL_VS2_VISION_BODY = '👨‍👩‍👦 人体检测';
// Blockly.LKL_VS2_VISION_SHAPE_CARD = '📐 形状卡片';
// Blockly.LKL_VS2_VISION_TRAFFIC_CARD = '🚥 交通卡片';
// Blockly.LKL_VS2_VISION_NUM_CARD = '🔢 数字卡片';
Blockly.LKL_VS2_VISION_COLOR_DETECT = '色块检测';
Blockly.LKL_VS2_VISION_COLOR_RECOGNITION = '颜色识别';
Blockly.LKL_VS2_VISION_BALL = '球体检测';
Blockly.LKL_VS2_VISION_BODY = '人体检测';
Blockly.LKL_VS2_VISION_SHAPE_CARD = '形状卡片';
Blockly.LKL_VS2_VISION_TRAFFIC_CARD = '交通卡片';
Blockly.LKL_VS2_VISION_NUM_CARD = '数字卡片';

// Vision Level
Blockly.Msg.LKL_VS2_LEVEL_DEFAULT = '默认';
Blockly.Msg.LKL_VS2_LEVEL_SPEED = '速度优先';
Blockly.Msg.LKL_VS2_LEVEL_BALANCE = '均衡';
Blockly.Msg.LKL_VS2_LEVEL_ACCURACY = '准确率优先';

// Vision Zoom Type
Blockly.Msg.LKL_VS2_ZOOM_DEFAULT = '默认';
Blockly.Msg.LKL_VS2_ZOOM_1 = '等级1';
Blockly.Msg.LKL_VS2_ZOOM_2 = '等级2';
Blockly.Msg.LKL_VS2_ZOOM_3 = '等级3';
Blockly.Msg.LKL_VS2_ZOOM_4 = '等级4';
Blockly.Msg.LKL_VS2_ZOOM_5 = '等级5';

// Vision White Balance Type
Blockly.Msg.LKL_VS2_AUTO = '自动';
Blockly.Msg.LKL_VS2_LOCK_AWB = '锁定白平衡';
Blockly.Msg.LKL_VS2_WHITE_LIGHT = '白光模式';
Blockly.Msg.LKL_VS2_YELLOW_LIGHT = '黄光模式';

// Vision State Value Type
Blockly.Msg.LKL_VS2_STATE_VALUE_X = '横向坐标';
Blockly.Msg.LKL_VS2_STATE_VALUE_Y = '纵向坐标';
Blockly.Msg.LKL_VS2_STATE_VALUE_WIDTH = '宽度';
Blockly.Msg.LKL_VS2_STATE_VALUE_HEIGHT = '高度';
Blockly.Msg.LKL_VS2_STATE_VALUE_LABEL = '标签';

Blockly.Msg.LKL_VS2_STATE_VALUE_R = '红色通道';
Blockly.Msg.LKL_VS2_STATE_VALUE_G = '绿色通道';
Blockly.Msg.LKL_VS2_STATE_VALUE_B = '蓝色通道';

// Vision Shape Card Type
// Blockly.Msg.LKL_VS2_CARD_TICK = '✔️ 钩';
// Blockly.Msg.LKL_VS2_CARD_CROSS = '❌ 叉';
// Blockly.Msg.LKL_VS2_CARD_CIRCLE = '🟡 圆形';
// Blockly.Msg.LKL_VS2_CARD_SQUARE = '🟩 方形';
// Blockly.Msg.LKL_VS2_CARD_TRIANGLE = '🔺 三角形';
Blockly.Msg.LKL_VS2_CARD_TICK = '钩';
Blockly.Msg.LKL_VS2_CARD_CROSS = '叉';
Blockly.Msg.LKL_VS2_CARD_CIRCLE = '圆形';
Blockly.Msg.LKL_VS2_CARD_SQUARE = '方形';
Blockly.Msg.LKL_VS2_CARD_TRIANGLE = '三角形';

// Vision Traffic Card Type
// Blockly.Msg.LKL_VS2_CARD_STRAIGHT = '⬆️ 向前';
// Blockly.Msg.LKL_VS2_CARD_TURN_LEFT = '⬅️ 向左';
// Blockly.Msg.LKL_VS2_CARD_TURN_RIGHT = '➡️ 向右';
// Blockly.Msg.LKL_VS2_CARD_TURN_AROUND = '⬇️ 掉头';
// Blockly.Msg.LKL_VS2_CARD_STOP = '🅿️ 停止';
Blockly.Msg.LKL_VS2_CARD_STRAIGHT = '向前';
Blockly.Msg.LKL_VS2_CARD_TURN_LEFT = '向左';
Blockly.Msg.LKL_VS2_CARD_TURN_RIGHT = '向右';
Blockly.Msg.LKL_VS2_CARD_TURN_AROUND = '掉头';
Blockly.Msg.LKL_VS2_CARD_STOP = '停止';

// Vision Color Type
Blockly.Msg.LKL_VS2_COLOR_BLACK = '黑色';
Blockly.Msg.LKL_VS2_COLOR_WHITE = '白色';
Blockly.Msg.LKL_VS2_COLOR_RED = '红色';
Blockly.Msg.LKL_VS2_COLOR_YELLOW = '黄色';
Blockly.Msg.LKL_VS2_COLOR_GREEN = '绿色';
Blockly.Msg.LKL_VS2_COLOR_CYAN = '青色';
Blockly.Msg.LKL_VS2_COLOR_BLUE = '蓝色';
Blockly.Msg.LKL_VS2_COLOR_PURPLE = '紫色';
Blockly.Msg.LKL_VS2_COLOR_UNKNOWN = '其他';

// LED color type
Blockly.Msg.LKL_VS2_LED_CLOSE = '关闭';
Blockly.Msg.LKL_VS2_LED_RED = '红色';
Blockly.Msg.LKL_VS2_LED_GREEN = '绿色';
Blockly.Msg.LKL_VS2_LED_YELLOW = '黄色';
Blockly.Msg.LKL_VS2_LED_BLUE = '蓝色';
Blockly.Msg.LKL_VS2_LED_PURPLE = '紫色';
Blockly.Msg.LKL_VS2_LED_CYAN = '青色';
Blockly.Msg.LKL_VS2_LED_WHITE = '白色';

// Mu Light Sensor Enable Disable
Blockly.Msg.LKL_VS2_LS_ENABLE = '启用';
Blockly.Msg.LKL_VS2_LS_DISABLE = '关闭';

// Mu Light Sensor Type
Blockly.Msg.LKL_VS2_LS_PROXIMITY = '接近检测';
Blockly.Msg.LKL_VS2_LS_ALS = '环境光检测';
Blockly.Msg.LKL_VS2_LS_GESTURE_SENSOR = '手势检测';

// Mu Light Sensor Sensitivity Type
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_DEFAULT = '默认';
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_LOW = '低';
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_MID = '中';
Blockly.Msg.LKL_VS2_LS_SENSITIVITY_HIGH = '高';

// Mu Light Sensor Gesture Type
Blockly.Msg.LKL_VS2_LS_GESTURE_UP = '上划';
Blockly.Msg.LKL_VS2_LS_GESTURE_DOWN = '下划';
Blockly.Msg.LKL_VS2_LS_GESTURE_LEFT = '左划';
Blockly.Msg.LKL_VS2_LS_GESTURE_RIGHT = '右划';
Blockly.Msg.LKL_VS2_LS_GESTURE_PUSH = '前进';
Blockly.Msg.LKL_VS2_LS_GESTURE_PULL = '后退';

// Mu WiFi Mode Type
Blockly.Msg.LKL_VS2_STA = '客户端';
Blockly.Msg.LKL_VS2_AP = '热点';