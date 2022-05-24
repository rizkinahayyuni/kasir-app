import axios from 'axios';
import React, { Component } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { API_URL } from '../utils/constants';
import { numberWithCommas } from '../utils/utils';

export default class TotalBayar extends Component {
    submitTotalBayar = (totalBayar) => {
        const pesanans = {
            total_bayar: totalBayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL+"pesanans", pesanans).then((res) => {
            this.props.history.push('/sukses')
        })
    }

    render() {
        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);
        return (
            <div className="fixed-buttom">
                <Row>
                    <Col>
                        <h4>Total Harga : <strong className='float-right mr-2'>Rp {numberWithCommas(totalBayar)}</strong></h4>
                        <Button className='primary' blok onClick={ () => this.submitTotalBayar(totalBayar)}>
                            <strong>BAYAR</strong>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
