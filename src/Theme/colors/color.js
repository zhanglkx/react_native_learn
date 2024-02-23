const colorManager = {
  themeBgColor: '#f5f5f5',
  themeColor: '#107868',
  titleColor90: hexToRGBA('#000000', 0.9),
  titleColor60: hexToRGBA('#000000', 0.6),
  titleColor40: hexToRGBA('#000000', 0.4),
};

/**
 * 将十六进制颜色转换为RGB格式
 * @param {string} hex - 十六进制颜色值，格式为"#RRGGBB"
 * @returns {string} - 转换后的RGB格式颜色值，格式为"rgb(R, G, B)"
 * @throws {Error} - 如果十六进制颜色值长度不为6，则抛出错误
 */
export function hexToRGB(hex) {
  if (hex.length !== 6) {
    throw new Error(
      'Invalid HEX color. It should be 6 characters long including "#".',
    );
  }

  // 提取十六进制颜色值中的红色、绿色和蓝色分量
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  // 返回转换后的RGB格式颜色值
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * 将十六进制颜色转换为RGBA格式
 * @param {string} hexColor - 十六进制颜色值
 * @param {number} alpha - 透明度
 * @returns {string} - RGBA格式的颜色值
 * @throws {Error} - 如果输入的十六进制颜色值无效或透明度无效
 */
export function hexToRGBA(hexColor, alpha) {
  // 验证输入
  if (hexColor.length < 6 || hexColor.length > 8) {
    throw new Error(
      'Invalid HEX color. It should be 6 or 8 characters long including "#".',
    );
  }
  if (typeof alpha !== 'number' || alpha < 0 || alpha > 1) {
    throw new Error(
      'Invalid alpha value. It should be a number between 0 and 1.',
    );
  }

  // 处理hex颜色值
  let r, g, b;
  if (hexColor.length === 7) {
    // 短格式（无透明度）
    r = parseInt(hexColor.slice(1, 3), 16);
    g = parseInt(hexColor.slice(3, 5), 16);
    b = parseInt(hexColor.slice(5, 7), 16);
  } else if (hexColor.length === 9) {
    // 长格式（包含透明度）
    r = parseInt(hexColor.slice(1, 3), 16);
    g = parseInt(hexColor.slice(3, 5), 16);
    b = parseInt(hexColor.slice(5, 7), 16);
    // 如果hex颜色已经包含透明度，则忽略输入的alpha值
  } else {
    throw new Error('Invalid HEX color length.');
  }

  // 输出rgba颜色值
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default colorManager;
