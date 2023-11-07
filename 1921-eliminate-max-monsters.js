// see py file for thought process

var eliminateMaximum = function(dist, speed) {
    let times = [];
    let res = 0;

    for (let i = 0; i < dist.length; i++) {
        times.push(dist[i]/speed[i]);
    }

    times.sort((a,b) => a-b);

    for (let i = 0; i < times.length; i++) {
        if (i >= times[i]) {
            break;
        } else {
            res++;
        }
    }

    return res;
};
