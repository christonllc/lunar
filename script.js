const LunarCalendar = require('chinese-lunar');

// 设置农历生日（2025年3月18日）
const lunarBirthday = { year: 2025, month: 3, day: 18 };

// 获取当前日期
const today = new Date();
const currentYear = today.getFullYear();

// 获取农历生日对应的阳历日期
const solarBirthday = LunarCalendar.lunarToSolar(lunarBirthday.year, lunarBirthday.month, lunarBirthday.day, false);

console.log("转换后的阳历生日:", solarBirthday);

if (!solarBirthday) {
  console.log("返回结果为空或无效！");
} else {
  if (typeof solarBirthday === 'string') {
    const solarDate = new Date(solarBirthday);
    console.log("解析后的阳历生日:", solarDate);

    const nextBirthday = new Date(solarDate.getFullYear(), solarDate.getMonth(), solarDate.getDate());

    if (today > nextBirthday) {
      nextBirthday.setFullYear(currentYear + 1);
      console.log("调整后的下一次生日日期:", nextBirthday);
    }

    const timeDiff = nextBirthday - today;
    if (isNaN(timeDiff) || timeDiff < 0) {
      console.log("出现错误，无法计算倒数日期！");
    } else {
      const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
      console.log(`距离农历生日还有 ${daysLeft} 天！`);
    }
  } else if (solarBirthday instanceof Date) {
    const nextBirthday = new Date(solarBirthday.getFullYear(), solarBirthday.getMonth(), solarBirthday.getDate());

    if (today > nextBirthday) {
      nextBirthday.setFullYear(currentYear + 1);
    }

    const timeDiff = nextBirthday - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(`距离农历生日还有 ${daysLeft} 天！`);
  } else {
    console.log("未能正确获取阳历生日！");
  }
}