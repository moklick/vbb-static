var path =			require('path');
var NeDB =			require('nedb');

var stops =			require('./stops');





module.exports = {



	_stops:		stops,
	stops:		null,



	init: function (dir) {
		dir = dir || path.join(__dirname, '../data');

		this.stops = Object.create(this._stops);
		this.stops.init(path.join(dir, 'stops.nedb'));
	}



};