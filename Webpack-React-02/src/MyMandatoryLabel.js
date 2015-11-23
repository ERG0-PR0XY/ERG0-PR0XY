import React from 'react';

class MyMandatoryLabel extends React.Component {

        constructor(props) {
            super(props);
        }

        onChange() {

        }

        render() {
            return ( < label > <span visibility=''>*</span> This is a label < /label>);
            }
        }

        export default MyMandatoryLabel;
