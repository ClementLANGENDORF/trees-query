import chai from 'chai';
import {object, withId} from "../src";
import mongo from 'mongodb';

chai.should();

beforeEach(async () => {
    //rien
});

const id = "5a6a03c03e77667641d2d2c3";

describe('TU query', function () {

    it('object', async function () {
        object(id).should.deep.equal(new mongo.ObjectID(id));
    });

    it('withId', async function () {
        withId(id).should.deep.equal({_id: object(id)});
    });

});