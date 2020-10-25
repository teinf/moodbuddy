function resetTimestampHours(timestamp) {
    var newDate = new Date(+timestamp)
    return newDate.setHours(0,0,0,0);
}

export default resetTimestampHours;