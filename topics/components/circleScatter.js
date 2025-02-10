/** 
 * circleScatter: Turn boolean array into a random scatter on a circle.
 */
/**
 * @typedef {Object} PolarPoint
 * @property {number} polarPoint.angle
 * @property {number} polarPoint.distance
 * @property {string} [polarPoint.color]
 */
/**
 * @typedef {Object} CartesianPoint
 * @property {number} cartesianPoint.x
 * @property {number} cartesianPoint.y
 * @property {string} [cartesianPoint.color]
 */
/**
 * @typedef {string} Color
 */

/** 
 * Turn boolean array into a random scatter on a circle.
 * 
 * @param {[boolean]} data 
 * @param {object} [params]
 * @param {[number,number]} [params.center]
 * @param {number} [params.radius] 
 * @param {'cartesian' | 'polar'} [params.coordinates] 
 * @param {Color} [params.colorTrue]
 * @param {Color} [params.colorFalse]
 * @returns {[PolarPoint] | [CartesianPoint]} cartesian or polar coordinates with color
 */
export function circleScatter(data, 
    {center = [0, 0], 
    radius = 1, 
    coordinates = 'cartesian', 
    colorTrue = 'green', 
    colorFalse = 'red'}) {

    console.assert(data.constructor === Array, "Data must be an array of booleans.")

    // Assign colors and random angles and distances.
    let points = data.map( 
        item => ({ 
            color: item ? colorTrue : colorFalse,
            angle: 2 * Math.PI * Math.random(),
            distance: radius * Math.sqrt(Math.random())
        })
    )

    if (coordinates === 'polar') {
        return points;
    }

    if (coordinates === 'cartesian') {
        points = points.map( point => ({
            x : center[0] + point.distance * Math.cos(point.angle),
            y : center[1] + point.distance * Math.sin(point.angle),
            color : point.color
        }))
        return points;
    }
}

let tab = [true, false, true, true];
let res = circleScatter(tab, {coordinates:'polar'});
console.log(res)
