import React, { Component } from 'react';
import './Coal.css';

import { Link } from 'react-router-dom'

// Inspiration: https://subtle.justgoodthemes.com/how-to-choose-an-interior-designer/

class Lumber extends Component {
  render() {
    var country = "Hestraeburg"

    var style = {
      backgroundImage: "url(/images/logging.jpg)",
      backgroundSize: "cover"
    }

    return (
      <div>
        <div className="cover-image-container" style={ style }>
          <div className="cover-title">
            <center>
              <subject>History</subject>
              <h1>A Forest for the trees</h1>
              <hr className="title-narrow"/>
              <h2>Logging, Community, {country}</h2>
            </center>
          </div>
        </div>
        <div className="Blog container">
        <p>Wood has been used as a fuel as long as humans have been around to need warmth(In fact, even pre-humans were known to start fires.)  Wood has been largely harvested by some variation on an <a href="/axe">axe</a>.
          </p>
        <p>The English forests of hardwoods and conifer had been all but decimated by the thirteenth century. Beginning in the 1540s, further exploitation of its remaining forests ensued as British factories began consuming vast amounts of wood to fuel its iron industry. In an attempt to preserve its dwindling resource, parliament passed Act for the Preservation of Woods in 1543, limiting further felling of timber to 440 yards from landed property. However, by the seventeenth century even the tracts that had been reserved for the Crown had been depleted. As a result, the price of firewood doubled between 1540 and 1570, leaving the poorest literally freezing to death.</p>
        <p>
        In 1584 Richard Hakluyt, archdeacon of London’s Westminster Abbey and preeminent geographer in Europe, published a manuscript titled A Discourse of Western Planting, in which he advocated the colonization of North America for the “employmente of numbers of idle men” to extract its natural resources for exportation to England. Among the commodities listed as marketable goods was trees. It was Hakluyt’s belief that North America and its endless stock of resources would solve the nation’s dilemma. Hakluyt projected that an established lumber industry would deliver returns that would in itself justify investment in settling the area that was becoming commonly known by several names including; Norumbega, Acadia, Virginia or New England.[5]

        Hakluyt and seven other men formed a joint stock company aptly named the Virginia Company, and on April 10, 1606 received the First Charter of Virginia from King James I. The charter split the company into two separate groups, a London-based group known as the London Company (of which Hakluyt was a member) and a Plymouth-based group known as the Plymouth Company. The charter decreed the right upon both companies to “make habitation, plantation, and to deduce a colony of sundry of our people into that part of America commonly called Virginia” between the thirty-fourth and forty-fifth degrees of north latitude.[6] On December 20, 1606 one hundred men and four boys boarded the ships Susan Constant, Godspeed, and Discovery and set sail down the Thames under Captain Christopher Newport.[7]

        On April 10, they entered the “Chesupioc” Bay and landed alongside “faire meddowes and goodly tall trees.”[8] Finally on April 26, 1607, the London Company reached Virginia, and declared their settlement Jamestown in honor of the King.[9] Almost immediately the London Company began sending shipments of trees back to England. A letter written in 1608 expressing the abundant discovery of good trees for export read, “I heare not of any novelties or other commodities she hath brought more then sweet woode.” However, exportation of any scale was delayed. During the winter of 1609, 154 of the original 214 colonists perished. The event would be remembered as the Starving Time, and it would be another eleven years before timber production of any consequence would resume in New England.[10]

        In 1621 pressure from Plymouth Company’s financiers impelled the colonists to ship to England a load of their commodities upon the vessel Fortune “laden with good clapboard as full as she could stowe.” However, it wasn’t long before the pilgrims realized that their wood supply was too precious a resource to export, and promptly restricted overseas sales in a colony-wide decree:

        “That for the preventing of such inconveniences as do and may befall the plantation by the want of timber, That no man of what condition soever sell or transport any manner of works…[that] may tend to the destruction of timber…without the consent approbation and liking of the Governor and councile.”[11]

        By the 1680s, over two dozen sawmills were operating in southern Maine.
        </p>
        </div>
      </div>

    );
  }
}

export default Lumber;
