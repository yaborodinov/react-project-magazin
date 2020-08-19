import React from "react"
import "./Cover.css"


class Cover extends React.Component {
    // constructor(props) {
    //     super(props);
    // };

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="secton__cover-row">
                        <a href="#" ><img className=" section__cover-img" src={this.props.image} alt="" /></a>
                        <div className="section__cover-title-block">
                            <h1 className="section__cover-title">{this.props.title}</h1>
                            <h2 className="section__cover-subtitle">{this.props.subtitle}</h2>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
export default Cover