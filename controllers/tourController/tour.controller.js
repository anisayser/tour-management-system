const Tour = require('../../models/tour.model');

module.exports.getAllTours = async (req, res) => {
    try {

        const { fields } = req.query;

        const queries = {}
        if (req.query.fields) {
            queries.fields = fields.split(',').join(' ');
            // console.log(queries.fields);
        }

        if (req.query.page) {
            const { page = 1, limit = 3 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = limit;
        }

        if (req.query.sort) {
            queries.sort = req.query.sort.split(',').join(' ');
        }

        const tours = await Tour.find({}).skip(queries.skip).limit(queries.limit).select(queries.fields).sort(queries.sort);



        res.status(200).json(tours);
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to load tours.',
            error: error.message
        })
    }
};


module.exports.addTour = async (req, res) => {
    try {
        const theTour = req.body;
        // console.log(theTour);
        const result = await Tour.create(theTour);
        res.status(200).json({
            status: 'Success',
            message: 'Sucessfully added the tour.',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to add tour.',
            error: error.message
        })
    }
}


module.exports.getATourById = async (req, res) => {
    try {
        const { id } = req.params;
        const tour = await Tour.findById(id);
        // console.log(tour.views + 1);
        await Tour.updateOne({ _id: id }, { $set: { views: tour.views + 1 } });

        res.status(200).json(tour);
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to get the tour.',
            error: error.message
        })
    }
}

module.exports.updateTourById = async (req, res) => {
    try {

        const { id } = req.params;
        const data = req.body;

        // console.log(id, data);
        const result = await Tour.updateOne({ _id: id }, { $set: data }, { runValidators: true });


        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to update the tour.',
            error: error.message
        })
    }
}

module.exports.cheapestTour = async (req, res) => {
    try {

        const result = await Tour.find({}).sort('cost').limit(3);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to get the cheapest tour.',
            error: error.message
        })
    }
}

module.exports.trendingTours = async (req, res) => {
    try {

        const tours = await Tour.find({}).sort('-views').limit(3);

        res.status(200).json(tours);

    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to get the tranding tours.',
            error: error.message
        })
    }
}