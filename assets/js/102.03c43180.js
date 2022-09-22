(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{304:function(e,t,a){"use strict";a.r(t);var i=a(7),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Freight Assignment is a demand segmentation (sub-genre) of "),a("a",{attrs:{href:"Network_assignment"}},[e._v("Network Assignment")]),e._v(" that can be defined within travel models where understanding freight movement on the network is of specific interest.  Freight (goods movement) can be shipped on a variety of modes (air, water, rail, road, pipeline), and Freight Assignment can refer to the network assignment of any of these modes on the applicable network (for example, goods shipped via air would be assigned to network of available air routes, with cargo shipment capacities).  The content on this page focuses on discussions and issues related to truck freight shipments being assigned to a roadway network alongside passenger vehicles.")]),e._v(" "),a("h3",{attrs:{id:"motivations-to-assigning-freight-separately"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivations-to-assigning-freight-separately"}},[e._v("#")]),e._v(" Motivations to Assigning Freight Separately")]),e._v(" "),a("p",[e._v("There are likely many reasons in which it might make sense to assign freight separately from passenger vehicles.  Here is a list of some of the reasons freight might be assigned separately:")]),e._v(" "),a("ul",[a("li",[e._v("Better representing the capacity (or ability for a section of roadway to handle a volume of traffic); truck percentage (or Passenger Car Equivalent, "),a("span",[a("div",{staticClass:"hint--html hint--top hint--hoverable"},[e._v("\nPCE\n"),a("div",{staticClass:"hint__content"},[a("h3",[e._v("PCE")]),e._v(" "),a("p",[e._v("Passenger Car Equivalen")]),a("p",{staticClass:"hint__tiny__left"},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Passenger_car_equivalent"}},[e._v("More info")])]),e._v(" "),a("p",{staticClass:"hint__tiny"},[e._v("See the full "),a("a",{attrs:{href:"/topics/glossary"}},[e._v("TFR Glossary")])])])])]),e._v(") is a very important element in assessing the volume-to-capacity and ultimately delay for a section of roadway.")]),e._v(" "),a("li",[e._v("Understanding truck flows across the network different than personal auto flows.")]),e._v(" "),a("li",[e._v("Visualizing the impacts of industry and freight related scenarios.")]),e._v(" "),a("li",[e._v("For larger region or Statewide models, some less frequently used roads will have weight or length or height restrictions and it can be to properly represent truck restrictions on to properly represent vehicle movement.")]),e._v(" "),a("li",[e._v("Tolling projects typically have a rate for freight traffic that is different than auto traffic, and therefore tolling projects might benefit from breaking out freight assignment as a demand segmentation different from an overall traffic assignment.")])]),e._v(" "),a("p",[e._v("There are undoubtably many additional reasons a model operator might find value in freight assignment.  Once determining to add freight assignment, it's important to anticipate that the methods and algorithms used for freight assignment will likely be different from those used to assign personal vehicles.")]),e._v(" "),a("h2",{attrs:{id:"considerations-and-challenges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#considerations-and-challenges"}},[e._v("#")]),e._v(" Considerations and Challenges")]),e._v(" "),a("h3",{attrs:{id:"value-of-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value-of-time"}},[e._v("#")]),e._v(" Value of Time")]),e._v(" "),a("p",[e._v('A foundational difference between freight and person vehicle is the value of time (VOT) that each type of traveler uses to make decisions.  While some network assignment implementations may skip discretely representing VOT, VOT should not be skipped or ignored in working to represent freight assignment.  A great reference on this is "“Establishing Values of Time for Freight Trucks in Order to Better Understand the Impact of Toll Policies” by Mei, Jussein, and Horowitz in 2013'),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v('.  One of the key takeaways of that paper is that "truckers are fairly rational in their route selection in order to minimize cost of haul" (Horwitz).  The authors specifically want to draw the reader’s attention to the bottom half of table 3.')]),e._v(" "),a("p",[e._v("Another critical component to consider regarding VOT is, to use a variety of VOT when possible. Using just one VOT value for trucks can create big shifts in truckers using a path (0% jumping to 100% or the reverse, for many OD pairs).  This can be especially problematic when analyzing tolled facilities.  In reality VOT is a constantly shifting value for all travelers based on the conditions at that moment.  Since a continuous distribution of VOT is not practical to use in assignment (at least in macro based assignment) as simplifying assumption where three or more values of VOTs can be used.")]),e._v(" "),a("h3",{attrs:{id:"generalized-cost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generalized-cost"}},[e._v("#")]),e._v(" Generalized Cost")]),e._v(" "),a("p",[e._v("It may be common approach to use a generalized cost formula to represent the various impedances a traveler faces in choosing a route.  A generalized cost formula can consider many variables.  Travel time, costs (tolls), and distance are common variables used, but the (Path Finding)[Path_Finding_Algorithm] page does a good job of listing others that might be considered.  In addition to the types of costs and impedance already listed on the prior link, freight vehicle may value additional or different impedances.  Here is a list of additional terms that may be considered in the generalized cost equation used in freight assignment:")]),e._v(" "),a("ul",[a("li",[e._v("distance")]),e._v(" "),a("li",[e._v("free-flow time")]),e._v(" "),a("li",[e._v("congested travel time")]),e._v(" "),a("li",[e._v("reliability of travel time")]),e._v(" "),a("li",[e._v("road hierarchy")]),e._v(" "),a("li",[e._v("legal restrictions")]),e._v(" "),a("li",[e._v("smaller lane widths")]),e._v(" "),a("li",[e._v("driveways/access interference")]),e._v(" "),a("li",[e._v("inappropriate turn radii")]),e._v(" "),a("li",[e._v("pedestrian conflicts")])]),e._v(" "),a("h3",{attrs:{id:"specific-route-weighting-factors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specific-route-weighting-factors"}},[e._v("#")]),e._v(" Specific Route Weighting Factors")]),e._v(" "),a("p",[e._v('In addition to some of the cost terms listed above, some practitioners have started to use impedance penalties by functional class (similar to "road hierarchy" listed above).  For example the Freight and Fuel Transportation Optimization Tool (FTOT)'),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(", which routes over the national "),a("span",[a("div",{staticClass:"hint--html hint--top hint--hoverable"},[e._v("\nFAF\n"),a("div",{staticClass:"hint__content"},[a("h3",[e._v("FAF")]),e._v(" "),a("p",[e._v("Freight Analysis Framework")]),a("p",{staticClass:"hint__tiny__left"},[a("a",{attrs:{href:"https://faf.ornl.gov/faf5/"}},[e._v("More info")])]),e._v(" "),a("p",{staticClass:"hint__tiny"},[e._v("See the full "),a("a",{attrs:{href:"/topics/glossary"}},[e._v("TFR Glossary")])])])])]),e._v(" network, multiplies up travel costs for all non-instate roadways, where:")]),e._v(" "),a("ul",[a("li",[e._v("Interstate Truck Weight = 1.0")]),e._v(" "),a("li",[e._v("Principal Arterial Truck Weight = 1.1")]),e._v(" "),a("li",[e._v("Minor Arterial Truck Weight = 1.2")]),e._v(" "),a("li",[e._v("Local Road Truck Weight = 1.3")])]),e._v(" "),a("p",[e._v("An important note on these factors is that FTOT routes on the national (Freight Analysis Framework (FAF))[https://ops.fhwa.dot.gov/freight/freight_analysis/faf/] and therefore this example only has national level roads, it has many links excluded.")]),e._v(" "),a("h3",{attrs:{id:"multi-class-freight-assignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-class-freight-assignment"}},[e._v("#")]),e._v(" Multi-class Freight Assignment")]),e._v(" "),a("p",[e._v("Breaking out freight assignment different than personal vehicle assignment is typically a large and costly decision to make.  If an entity is moving forward with a separate freight assignment, it might also be good to consider if it makes sense to sub-divide freight vehicles further into a multi-class freight assignment.  The following are some potential ways freight vehicle might be broken up into different classes:")]),e._v(" "),a("ul",[a("li",[e._v("Potential split between articulated and rigid vehicles.")]),e._v(" "),a("li",[e._v("Possible range of different size categories.")]),e._v(" "),a("li",[e._v("Potential split between loaded and unloaded vehicles.")]),e._v(" "),a("li",[e._v("Are drivers following navigation software? Maybe the alternative route is better, but navigation software is programmed to look at different characteristics? If a lot of drivers are using technology, can you find out what the navigation software is considering and use this to support your solution? Market penetration of navigation assistance could be important.")]),e._v(" "),a("li",[e._v("How many drivers are personally paying the toll or feel like the toll cuts into their income?")]),e._v(" "),a("li",[e._v("Many trucks travel directly from the point of production to the point of consumption, but many others do not.")])]),e._v(" "),a("h3",{attrs:{id:"other-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-considerations"}},[e._v("#")]),e._v(" Other considerations")]),e._v(" "),a("p",[e._v("In addition to the considerations above, modeling peers have also offered the additional suggestions and ideas related to the topic of freight assignment:")]),e._v(" "),a("ul",[a("li",[e._v("Modelers should consider acquiring additional data (example GPS vehicle traces) and re-estimating assignment to better account for penalties.")]),e._v(" "),a("li",[e._v("May need to consider a more detailed assignment approach, potentially using a discrete route choice model / multinomial logit choice (having similar benefits to a stochastic approach, where multiple paths are represented for each O-D pair)"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(".")]),e._v(" "),a("li",[e._v("Pre-loading trucks (any vehicle class) seems generally to be discouraged across the profession, although a number of peers identify that it can be a very practical solution (simple representation) of behavior that is very difficult to fully enumerate.")]),e._v(" "),a("li",[e._v('Custom treatments (extra time penalties) are sometimes added to segments known to be problematic (areas with high curvature, or other geometric or highly specific situations). One practitioner added, "Many highway networks, particularly as to local streets, are not very well suited for getting the accurate impedances for trucks. Tweaks may be necessary."')]),e._v(" "),a("li",[e._v("Assign a different posted or free-flow speed for trucks versus cars (in particular this should be done if the two vehicle types have different posted legal speed limits).  Some advised to use model link speed for trucks to represent speed adjustments for geometric items like grade, curvature, railroad crossings, neighborhood roads / number of access points.")]),e._v(" "),a("li",[e._v("When considering truck versus car travel speeds, the performance management (NPMRDS) data is a great and standard source for the differences between car and truck speeds. Data sources available to each agency will naturally vary, but the NPMRDS data is the one that’s available for free to all DOTs and MPOs in the US.")]),e._v(" "),a("li",[e._v('"There is no substitute for a high-level of spatial precision."')]),e._v(" "),a("li",[e._v("A “truck” model is a big simplification of a “freight” model. “Truck” models can be quite useful, but their limitations need to be recognized.")]),e._v(" "),a("li",[e._v("It might be beneficial to test assigning external (E-E, E-I, I-E) freight trips differently than internal freight trips.  The modeler might consider doing a one-off multi-class assignment where the truck trip-tables are broken into; E-E, E-I, I-E, and I-I, and then assessing if there are patterns in how each type assigns and assessing if treatments might be applied based on the length of the trip.  Similarly to breaking up trips by external and internal, a modeler might also want to assign freight trips by trip distance to assess and understand any patterns that might help in improving the freight assignment.")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("Qinfen Mei, Mazen I. Hussein, Alan J. Horowitz, “Establishing Values of Time for Freight Trucks in Order to Better Understand the Impact of Toll Policies”, Transportation Research Record, Journal of the Transportation Research Board, Number 2344, 2013, pp 135–143. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[e._v("https://github.com/VolpeUSDOT/FTOT-public "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[e._v("https://www.caliper.com/pdfs/traffic-assignment-and-feedback-research-to-support-improved-travel-forecasting.pdf "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);