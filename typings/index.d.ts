import PropTypes from 'prop-types'
import React from 'react'

interface IPropsType {
  children: JSX.Element
  url: string | (() => string)
  headers: {
    [key: string]: string
  }
  fileName: string
  fileMIMEType: string
}
declare class RfReceiver extends React.Component<IPropsType> {
  _fireOriginalClick: (e: MouseEvent) => void
  _onClick: (e: MouseEvent) => void
  render(): React.FunctionComponentElement<any>
}
export default RfReceiver
