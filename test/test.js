import chai from 'chai';
import {object, withId} from "../src";

chai.should();

beforeEach(async () => {
    //rien
});

const id = "5a6a03c03e77667641d2d2c3";

describe('TU Init', function () {

    it('withId', async function () {
        withId(id).should.deep.equal({_id: object(id)});
    });

});