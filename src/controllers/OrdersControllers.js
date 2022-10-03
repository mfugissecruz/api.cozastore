class OrdersControllers {

    async show(req, res) {
        
    }

    async store(req, res) {
        try {
            const { id, customer_id, product_id } = req.params
            const { status, quantity, discount, discount_value, value, date } = req.body;
            const order = await db.none('INSERT INTO customers(id, customer_id, product_id,status, quantity, discount, discount_value, value, date) VALUES(${id}, ${customer_id}, ${product_id}, ${status}, ${quantity}, ${discount}, ${discount_value}, ${value}, ${date})',
            { id, customer_id, product_id,status, quantity, discount, discount_value, value, date });
        
            return res.status(200).json({order});

        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

module.exports = OrdersControllers;