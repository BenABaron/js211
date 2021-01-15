/**
 * write a function that,
 * takes in height and base of a triangle,
 * and returns the area of the triangle
 * 
 * @param {number} base the base of the triangle
 * @param {number} height the height of the triangle
 * 
 */

let triangleArea = function(base, height) {
  let area = ((base*height)/2)
  if (base < 0 || height < 0) {
    return undefined
  } else {
    return area
  }
}


const assert = require('assert')
describe('Testing Valid Triangles', function(){

    it('Testing the Unit Traingle', function(){
      let actual = triangleArea(1,1)
      let expected = .5
      assert.equal(actual, expected)
    })

    it('Height Greater Than 1', function(){
      let actual = triangleArea(1,2)
      let expected = 1
      assert.equal(actual, expected)
    })

    it('Base Greater Than 1', function(){
      let actual = triangleArea(2,1)
      let expected = 1
      assert.equal(actual, expected)
    })

    it('Base and Height Greater than 1', function(){
      let actual = triangleArea(2,2)
      let expected = 2
      assert.equal(actual, expected)
    })

})

describe('Testing Invalid Triangles', function(){

    it('Testing Negative Base', function(){
      let actual = triangleArea(-1, 1)
      let expected = undefined
      assert.equal(actual, expected)
    })

    it('Testing Negative Height', function(){
      let actual = triangleArea(1, -1)
      let expected = undefined
      assert.equal(actual, expected)
    })

})