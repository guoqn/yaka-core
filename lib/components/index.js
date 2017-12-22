import { Button, InputNumber, Table, Row, Col, Card, Form, Checkbox, Input } from 'igroot'

import { YakaEditTable } from './yaka-edit-table'
import { YakaSwitch } from './yaka-switch'
import { YakaEditor } from './yaka-editor'
import { YakaSelect } from './yaka-select/'
import { YakaDatePicker } from './yaka-datepicker/'
import { YakaTimePicker } from './yaka-timepicker//'
import { Radio } from './yaka-radio/'

const CheckboxGroup = Checkbox.Group,
  TextArea = Input.TextArea

export default {
  EditTable: YakaEditTable,
  Switch: YakaSwitch,
  Editor: YakaEditor,
  TimePicker: YakaTimePicker,
  Checkbox: CheckboxGroup,
  Radio,
  Select: YakaSelect,
  Button,
  Input,
  InputNumber,
  Table,
  Row,
  Col,
  Card,
  Form,
  DatePicker: YakaDatePicker,
  Input,
  TextArea
}