var ser = {
    name: 'Во все тяжкие',
    releaseData: 2008,
    endReleaseData: 2013,
    mainActor: 'Брайан Крэнстэн, Аарон Пал, Анна Ганн, Динн Норис',
    episodes: 5,
    series: 62,
}

console.log('Сериал ' + ser.name + ', был выпускаться с ' + ser.releaseData + ' по ' + ser.endReleaseData + ' года. В главных ролях ' + ser.mainActor + '. В ' + 
ser.name + ' ' + ser.episodes + ' сезонов и ' + ser.series + ' серий.'
);

var day = "monday"

switch(day){
    case "Monday":
    case "monday":
        console.log('Понедельник')
        break
    case "Tuesday":
    case "tuesday":
        console.log('Вторник')
        break
    case "Wednesday":
    case "wednesday":  
        console.log('Среда')
        break  
    case "Thursday":
    case "thursday":  
        console.log('Четверг')
        break 
    case "Friday":
    case "friday":  
        console.log('Пятница')
        break 
    case "Saturday":
    case "saturday":  
        console.log('Суббота')
        break 
    case "Sunday":
    case "sunday":  
        console.log('Воскресенье')
        break 
    default:
        console.log('Вводите корректную день недели!');
}