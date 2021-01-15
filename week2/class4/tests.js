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
  return area
}


const assert = require('assert')
describe('Testing Valid Triangles', function(){

    it('Testing the Unit Traingle', function(){
      let actual = triangleArea(1,1)
      let expected = .5
      assert.equal(actual, expected)

    })

})