import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";
import ShoeList from "./ShoeList";
import Carousel from './Carousel'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      shoe: [
        {
          name: " Air Jordan XI 'Concord' ",
          price: "$220",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/nqyq1tt3zvpcrgyaiaiw/air-jordan-11-concord"
        },
        {
          name: " Adidas Yeezy 500 ",
          price: "$200",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/vnunhsiudynrlghskhju/adidas-yeezy-500-salt-ee72870-release-date"
        },
        {
          name: "Diamond Supply Co. x Nike SB Dunk Low 'Canary'",
          price: "$200",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/j72sqs28vhb2d86dfki1/nike-sb-dunk-low-canary"
        },
        {
          name: "Off-White x Air Jordan 1 'White'",
          price: "$190",
          description:
            "The irony of the all-white version of the Off-White x Air Jordan 1 making this 2018 list is that it very easily could have come out in 2017 as the original edition of the Off-White x Air Jordan 1. Abloh initially intended for the shoe to be white, but after spotting a pair of sneakers at an airport—and being unsure if they were Dunks or Air Jordans—he made a last-minute call to change the first colorway to one immediately associated with the Air Jordan for the model’s introduction. Despite its later-than-planned debut and Europe-only launch, the colorway was highly coveted, and resells for nearly the price of the original. And while it may not have the iconic “Chicago” Air Jordan colorway, Abloh’s reimagining of the silhouette is on full display thanks to the tonal blocking.",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/rkfaiir0rlsu0cyrow5p/off-white-air-jordan-1"
        },
        ,
        {
          name: "Air Jordan III 'Black/Cement'",
          price: "$200",
          description:
            "The 'Black/Cement' Air Jordan III released in 1988, 1994, 2001, 2008 (along with the Air Jordan XX as part of a 'Countdown Pack'), and 2011, so one can be forgiven if one is less that excited for 2018’s most recent drop. But an all-time classic is an all-time classic, and like the five previous versions, the sixth time was also a charm. With improved materials and the return of the ever-important original “Nike Air” logo on the heel, Jordan Brand had another hit on its hands with the latest retro of the “Black/Cement” III. Pairs may not have disappeared the second they hit the shelves, but the sneaker had no trouble selling out upon its initial release—or its many restocks throughout the year. And for fans of the model who’d yearned for a true-to-form remake of the original, the chance to actually buy it was what was important.",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/s7bdg5e9ldb0iusyvpfz/air-jordan-3-iii-black-cement-release-date-854262-001"
        },
        {
          name: "Nike Air Fear of God 1",
          price: "$350",
          description:
            "Jerry Lorenzo raised the collaborative bar in 2018 with his Fear of God x Nike project. The collection’s apparel features a heavy retro basketball inspiration mixed with familiar elements from Lorenzo’s own line, like oversize cuts and raw edges. While that may have been fairly predictable for the collab, what was less expected was the inclusion of a brand new sneaker model in the form of the Nike Air Fear of God 1. Not only did Lorenzo design his own model, but with the help of Nike Basketball’s design director, Leo Chang, he created a sneaker intended to be worn on court—where it was debuted in November by reigning NBA sneaker king P.J. Tucker. The shoe uses a double-stack Zoom Air unit in the heel, visible through an Air Max 180-style window, and also incorporates a Huarache Light-inspired TPU midfoot cage. Its high retail price ($350) and even higher level of hype may keep it off most non-NBA courts, but the shift to a performance focus for such a high-profile collab is a truly noteworthy event.",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/bxc3ey4irplgseouaymu/nike-fear-of-god-1-sail-ar4237-002-release-date"
        },
        {
          name: "Travis Scott x Air Jordan IV",
          price: "$225",
          description:
            "There isn’t an entertainer out right now who’s moving sneaker culture more than Travis Scott. The rapper, who previously collabed with Nike on an Air Force 1, officially became a part of the Jordan Brand family this year with his “Cactus Jack” versions of the Air Jordan IV. The colorway that made it to retail in 2018, a Houston Oilers-inspired homage to Scott’s hometown, was easily one of the most hyped drops of the year, and was bolstered by Scott dropping one of the best albums of the year. It takes a special kind of clout to get the green light to replace the Jumpman or Nike Air logos with your own, and from what we’ve seen, this may only be the beginning.",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/dwzkbopwcam4judp227p/travis-scott-air-jordan-4-iv-oilers-release-date-308497-406"
        },
        {
          name: "Union x Air Jordan 1",
          price: "$190",
          description:
            "One of the first things you recognize about the Union x Air Jordan 1 is its chopped-and-screwed aesthetic, which is meant to look like someone DIY’d two different pairs of vintage Air Jordans together. There are other small details that set this Air Jordan 1 apart from the rest, like the exposed foam on the tongue and the dual-colored laces that match the color scheme on the upper. But the most underrated part of this sneaker isn’t visible from afar. Give thanks for the leather. The thick-leather Union x Air Jordan 1 is probably the closest you’ll get to a pair of vintage ’85 or ’94 Jordans. It’s a great pair of sneakers to just beat up. If you were lucky enough to come up on a pair, you can be certain that they’ll even wear better with age.",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/nxdcoxtasur0nqkhpjno/union-la-air-jordan-1-high-nrg-bv1300-106-release-date"
        },
        {
          name: "Sean Wotherspoon x Nike Air Max 1/97",
          price: "$160",
          description:
            "One of the best shoes this year is also one of the most controversial—just ask Full Size Run co-host Brendan Dunne. Sean Wotherspoon, a professional reseller, got his own Nike sneaker, even though he designed it with, like, 15 other people. He took an Air Max 97 upper, made it out of corduroy, and placed it on an Air Max 1 sole. Wotherspoon’s design went into production after being “Voted Forward” in a crowdsourced Nike competition for Air Max Day in 2017, and a few pairs released last year. Then they saw a major release in 2018, with all sorts of interactive activations that let people get their pairs. Resale on the reseller’s shoe skyrocketed, even if people felt some sort of way about Wotherspoon’s own shop, Round Two, reselling the sneakers. He said he wasn’t taking any profit on those pairs, but it still left a bad taste in the mouths of connoisseurs or anyone who had been into sneakers for more than two years. All of that aside, it’s a good shoe in a good colorway, and everyone loves it. That’s all that matters sometimes.",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/h81gd6dd81pbpciclrnu/sean-wotherspoon-nike-air-max-1-97-release-date-aj4219-400"
        },
        {
          name: "Nike React Element 87",
          price: "$160",
          description:
            "After scrolling through this list, you might realize that it’s predominantly Nike and Jordan. That’s not because they paid us off. Nike had a hell of a year, and it wasn’t just based on bringing retros out of the archives, but also on introducing new silhouettes to the market. That should be the criteria for best sneaker of the year. The sneaker was first unveiled at Undercover’s Paris fashion show, but the general release version of the React Element 87 didn’t need a rapper or pro athlete’s name attached to it. It was simply a sleek sneaker that looked like the future. The translucent upper may be a turnoff for those who are self-conscious about baring their feet, but it’s also a way to flex if you’re one to spend $155 on Gucci socks (shoutout FSR co-host Trinidad Jame$). Other details, like the reflective hits on the laces and the cork insole, really helped complete the package on top of the React cushioning. When a new shoe becomes the talk of the town, it's worth noting, and, in this case, making it the Sneaker of the Year.",
          imageAddress:
            "https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/xkzqayj77lrqhbwbdnia/nike-react-element-87"
        }
      ]
    };
  }
  render() {
    let shoeList = this.state.shoe.map(shoe => {
      return (
        <Col sm="4">
          <ShoeList shoe={shoe} />
        </Col>
      );
    });
    return (
      <Container fluid>
      <Carousel />

        <Row>{shoeList}</Row>
      </Container>
    );
  }
}
