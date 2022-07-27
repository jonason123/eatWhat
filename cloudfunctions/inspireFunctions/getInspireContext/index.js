exports.main = async (event, context) => {
  var date = new Date();
  var hour = date.getHours();
  var inspireContext = '等会儿吃什么';
  if (hour < 9 && hour > 6){
    inspireContext = '早饭吃什么';
  }
  return {
    inspireContext
  }
}