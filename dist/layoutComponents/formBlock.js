'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (ele, that) {
    var _that$components = that.components,
        Row = _that$components.Row,
        Col = _that$components.Col,
        Form = _that$components.Form,
        Button = _that$components.Button;

    var FormItem = Form.Item;
    var _ele$props = ele.props,
        colWidth = _ele$props.colWidth,
        labelCol = _ele$props.labelCol,
        wrapperCol = _ele$props.wrapperCol,
        gutter = _ele$props.gutter,
        onSubmit = _ele$props.onSubmit,
        title = _ele$props.title;

    var rowNum = Math.floor(24 / colWidth);
    var times = Math.ceil(ele.children.length / rowNum);
    var _children = [];
    for (var i = 0; i < times; ++i) {
        _children.push(ele.children.slice(i * rowNum, (i + 1) * rowNum));
    }
    var getFieldDecorator = that.form.getFieldDecorator;

    var styles = {
        title: {
            fontSize: 18,
            borderBottom: '2px solid #1DA57A',
            padding: '0 15px'
        },
        block: {
            background: '#fff'
        }
    };
    var props = that.bindingProps(ele);
    return _react2.default.createElement(
        Row,
        { gutter: gutter ? gutter : 0, style: styles.block, key: ele.name },
        _children.map(function (row, index) {
            return _react2.default.createElement(
                Row,
                { gutter: gutter ? gutter : 0, key: '' + ele.name + index },
                row.map(function (col, subindex) {
                    var colProps = that.bindingProps(col);
                    return _react2.default.createElement(
                        Col,
                        {
                            span: col.col && col.col || colWidth,
                            key: '' + ele.name + index + subindex },
                        colProps.show === false ? _react2.default.createElement('div', null) : _react2.default.createElement(
                            FormItem,
                            {
                                label: col.label,
                                labelCol: {
                                    span: col.labelCol ? col.labelCol : labelCol
                                },
                                wrapperCol: {
                                    span: col.wrapperCol ? col.wrapperCol : wrapperCol
                                }
                            },
                            col.component && that.componentCheck(col) ? getFieldDecorator('' + col.name, {
                                initialValue: col.value ? col.value : null,
                                rules: col.rules ? col.rules : null
                            })(that.elementWalk([col])[0]) : _react2.default.createElement(
                                'div',
                                null,
                                '\u975E\u6CD5\u8868\u5355\u7EC4\u4EF6'
                            )
                        )
                    );
                })
            );
        })
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }