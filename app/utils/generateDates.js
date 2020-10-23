function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randchoose(arr) {
  return arr[randint(0, arr.length - 1)];
}

function generateDates(
  amount = 365,
  startingDate = 1577833200000,
  moodsInDay = 2,
  moods = [0, 1, 2, 3, 4],
  emotions = [0, 1, 2, 3, 4, 5]
) {
  var dates = {};

  var date = new Date(startingDate);
  for (var i = 0; i < amount; i++) {

    var randomMood = randchoose(moods)

    var noRepeatingEmotions = [...emotions]
    var randomEmotions = []
    for(var j=0; j<randint(0,emotions.length -1 ); j++) {
        randomEmotions.push(noRepeatingEmotions.pop(randint(0, noRepeatingEmotions.length - 1)))
    }

    var timestamp = date.getTime()

    var newDate = {}
    newDate[timestamp] = {"mood": randomMood, "emotions": randomEmotions}
    dates = {...dates, ...newDate}
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

export default generateDates;
