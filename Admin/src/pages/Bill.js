import React from 'react';
import { Table } from 'antd';


const columns = [{
    title: '账单名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '时间',
    dataIndex: 'createTime',
    key: 'createTime',
}];

class Bill extends React.Component {
    constructor() {
        super();
        this.state = { listdata: [], loading: true, msg: "1111" };

    }
    componentWillMount() {
        fetch(global.constants.api+'Bill/List', {
        })
            .then(response => {
                response.json().then(data => {
                    this.setState({ listdata: data, loading: false, msg: "2222" });
                });
            });

    }

    render() {
        return (
            <div>
                <Table dataSource={this.state.listdata} columns={columns} />
            </div>
        )
    }
}
export default Bill