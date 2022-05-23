const axios = require('axios').default;
var assert = require('assert');

 
  describe('testMock', function () {
    it('判断 testMock 是不是数组 不是的话返回 -1', async function () {
        const response = await axios.get('http://localhost:8001/testMock');
        assert.equal('object',typeof response.data, -1);
    });
  });
 

  describe('test111', function () {
    it('判断 test111 返回数据是不是 aaaaa', async function () {
        const response = await axios.get('https://www.npmjs.com/package/axios');
        console.log(response)
        assert.equal('aaaaa',response.data, -1);
    });
    it('判断 test111 返回类型是不是 字符串', async function () {
        const response = await axios.get('http://localhost:8001/test111');

        assert.equal('string',typeof response.data, -1);
    });
  });
 