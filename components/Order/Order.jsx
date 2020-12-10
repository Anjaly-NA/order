import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
});

const Order = () => {
    const initial = [
        { 'user': 'John Smith', 'product': 'coco cola', 'price': '1 EUR', 'quantity': '2', 'total': '2 EUR', 'date': '2020 nov 3', 'actions': <button onClick={() => setRow([rows.pop()])}>Delete</button> },
        { 'user': 'jose Smith', 'product': 'coco cola', 'price': '1 EUR', 'quantity': '2', 'total': '2 EUR', 'date': '2020 nov 3', 'actions': <button onClick={() => setRow([rows.pop()])}>Delete</button> },
    ];
    const [data, setData] = useState({ user: '', product: '', quantity: '' });
    const [rows, setRow] = useState(initial);
    const classes = useStyles();
    const addOrder = () => {
        // rows.push({ 'user': 'rest Smith', 'product': 'coco cola', 'price': '1 EUR', 'quantity': '2', 'total': '2 EUR', 'date': '2020 nov 3', 'actions': 'edit delete' });
        setRow([...rows, {
            'user': `${data.user}`, 'product': `${data.product}`, 'price': '1 EUR', 'quantity': `${data.quantity}`, 'total': `${data.quantity * 2} EUR`, 'date': '2020 nov 3', 'actions': <button onClick={() => setRow([rows.pop()])}>Delete</button>
        }])
    }
    return (
        <React.Fragment>
            <div style={{ width: '600px', border: '2px solid grey', height: '200px' }}>
                <div>Add new order</div>
                <div>
                    <label for="users">User</label>
                    <select id="users" name="users" value={data.user} onChange={e => setData({ ...data, user: e.target.value })}>
                        <option value="john">john</option>
                        <option value="bob">bob</option>
                        <option value="alice">alice</option>
                        <option value="smith">smith</option>
                    </select>
                </div>
                <div>
                    <label for="product">Product</label>
                    <select id="product" name="product" value={data.product} onChange={e => setData({ ...data, product: e.target.value })}>
                        <option value="fanta">fanta</option>
                        <option value="cococola">cococola</option>
                        <option value="miranda">miranda</option>
                        <option value="pepso">pepso</option>
                    </select>
                </div>
                <div>
                    <label for="quantity">Quantity</label>
                    <input type="text" name="" id="" value={data.Fquantity} onChange={e => setData({ ...data, quantity: e.target.value })} />
                </div>
                <div>
                    <button type="submit" onClick={addOrder}>Add</button>
                </div>
            </div>
            <TableContainer component={Paper} style={{ width: '800px' }}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell >{row.user}</TableCell>
                                <TableCell align="right">{row.product}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.actions}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}
export default Order;