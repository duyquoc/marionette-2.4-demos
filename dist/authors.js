"use strict";

var Authors = [{ name: "Aaron" }, { name: "Aaron Gibralter" }, { name: "Aaron Greenlee" }, { name: "Aaron Rosenberg" }, { name: "Aaron Sheriff" }, { name: "Aaron Yoshitake" }, { name: "Abiyasa Suhardi" }, { name: "Adam Boduch" }, { name: "Adam Stankiewicz" }, { name: "Adrian Phinney" }, { name: "AlexDeLaCreme" }, { name: "Alexis THOMAS" }, { name: "Amit Snyderman" }, { name: "Amy Palamountain" }, { name: "Andrae Muys" }, { name: "Andre Asselin" }, { name: "Andreas Köberle" }, { name: "Andrei Fokau" }, { name: "Andrew Cobby" }, { name: "Andrew Hubbs" }, { name: "Andrew Humphreys" }, { name: "Andrew Kennedy" }, { name: "Anubh" }, { name: "Barrett Sonntag" }, { name: "Ben Duncan" }, { name: "Ben Fenton" }, { name: "Ben McCormick" }, { name: "Ben Smith" }, { name: "Beng Hee Eu" }, { name: "Benjamin Zalasky" }, { name: "Bernd Matzner" }, { name: "Bobby Peck" }, { name: "Brandon Alexander" }, { name: "Brant Bobby" }, { name: "Brian Burns" }, { name: "Brian Folts" }, { name: "Brian Mann" }, { name: "Brian Ng" }, { name: "Bruno Carriere" }, { name: "Bruno Michel" }, { name: "Burak Emre Kabakcı" }, { name: "Caleb Mingle" }, { name: "Cameron Crothers" }, { name: "Cameron Rivers" }, { name: "Chaitanya Mutyala" }, { name: "Charles Davison" }, { name: "Chip Lay" }, { name: "Chris Camaratta" }, { name: "Chris Eldridge" }, { name: "Chris Grant" }, { name: "Christian Maher" }, { name: "Christopher McCulloh" }, { name: "Clemens" }, { name: "Craig P Jolicoeur" }, { name: "Daniel" }, { name: "Daniel Anderson Tiecher" }, { name: "Daniel Perez Alvarez" }, { name: "David Peter" }, { name: "David Schäfer" }, { name: "David Sulc" }, { name: "David Tillery" }, { name: "Deni" }, { name: "Denis Ciccale" }, { name: "Dennis" }, { name: "Derick Bailey" }, { name: "Dima Bildin" }, { name: "Dima Kurguzov" }, { name: "DjebbZ" }, { name: "Dmitry Minkovsky" }, { name: "Dmytro Yarmak" }, { name: "Drew Dara-Abrams" }, { name: "Duncan Beaton" }, { name: "Duncan Beevers" }, { name: "Dylan Kirby" }, { name: "Edan Schwartz" }, { name: "Elliot Foster" }, { name: "Eric Matthys" }, { name: "Eric O'Connell" }, { name: "Erich Heine" }, { name: "ErichBSchulz" }, { name: "Erin Swenson-Healey" }, { name: "Erwin Poeze" }, { name: "Evgeny Chernyavskiy" }, { name: "Evgeny Shpilevsky" }, { name: "Fabrizio Fortino" }, { name: "Felipe Fernández" }, { name: "Florent DUVEAU" }, { name: "Godfrey Chan" }, { name: "Gorka Maiztegi" }, { name: "Graeme" }, { name: "Graeme Yeates" }, { name: "Guilherme Oderdenge" }, { name: "Guy Korland" }, { name: "Håvard Lindset" }, { name: "Håvard Lindset" }, { name: "Ido Feins" }, { name: "JD Isaacks" }, { name: "JackEllis" }, { name: "Jacob Dreesen" }, { name: "James Kyle" }, { name: "James Smith" }, { name: "Jamie Curtis" }, { name: "Jared Barboza" }, { name: "Jarid Margolin" }, { name: "Jarrod Overson" }, { name: "Jason" }, { name: "Jason Laster" }, { name: "Jean-Denis Vauguet" }, { name: "Jeff Keen" }, { name: "Jeremy Fairbank" }, { name: "Jeremy McLeod" }, { name: "Jeremy Morrell" }, { name: "Jesse Sanford" }, { name: "Jiawei Li" }, { name: "Jim Garrison" }, { name: "Jmeas" }, { name: "Jmeas Smith" }, { name: "Joanne Daudier" }, { name: "Joe Gornick" }, { name: "Joe Zim" }, { name: "Johannes Jörg Schmidt" }, { name: "John Anderson" }, { name: "John Noble" }, { name: "John P Speno" }, { name: "John Paul" }, { name: "Jon Koops" }, { name: "Jonathan Bowers" }, { name: "Jonathan Coombs" }, { name: "Jonathan El-Bizri" }, { name: "Jonathan Knapp" }, { name: "Jonathan Mahoney" }, { name: "Joshua Hanson" }, { name: "Joël Cox" }, { name: "Julik Tarkhanov" }, { name: "Justin Abene" }, { name: "Justin G" }, { name: "Justin Ridgewell" }, { name: "KahWee Teng" }, { name: "KevM" }, { name: "Kevin Dente" }, { name: "Kevin Dew" }, { name: "Kevin Miller" }, { name: "Kevin Zhao" }, { name: "KiT O" }, { name: "Kim Joar Bekkelund" }, { name: "Kirill Korolyov" }, { name: "Koen Schmeets" }, { name: "Kostas Karachalios" }, { name: "Kyle Needham" }, { name: "Lawrence Hunt" }, { name: "Leonardo Andres Garcia Crespo" }, { name: "Lorenzo" }, { name: "Louis Salin" }, { name: "Louis Simoneau" }, { name: "Lukasz Fiszer" }, { name: "Lyle Shearer" }, { name: "Maksim Horbachevsky" }, { name: "Marat Fakhreev" }, { name: "Marc-Olivier" }, { name: "Marcel Klehr" }, { name: "Marius Butuc" }, { name: "Mark Robinson" }, { name: "Mark Ture" }, { name: "Marten Veldthuis" }, { name: "Mathias Schäfer" }, { name: "Matt Briggs" }, { name: "Matt Jensen" }, { name: "Matt Sheehan" }, { name: "Matthew Eagar" }, { name: "Mattias Pfeiffer" }, { name: "Maxime Thirouin" }, { name: "Michael Scott Hertzberg" }, { name: "Natan Vivo" }, { name: "NginZ" }, { name: "Nicholas Masters" }, { name: "Nick Pruitt" }, { name: "Nicklas Ansman Giertz" }, { name: "Nikolai Fedorov" }, { name: "Nima Mehanian" }, { name: "Oliver Joseph Ash" }, { name: "Osama Ibrahim" }, { name: "Osama Khalil" }, { name: "Patrick Browne" }, { name: "Patrick Klingemann" }, { name: "PatrickJS" }, { name: "Paul Falgout" }, { name: "Paul Iannazzo" }, { name: "Paul Irish" }, { name: "Paul Tyng" }, { name: "Paul Wittmann" }, { name: "Paul Young" }, { name: "Paulo Vieira" }, { name: "Pedro Sola" }, { name: "Philip Schatz" }, { name: "Philipp Wahala" }, { name: "Piotrek" }, { name: "PockyCat" }, { name: "Rajiv M Ranganath" }, { name: "Richard Mitchell" }, { name: "Rifat Nabi" }, { name: "Riley" }, { name: "Rob Jefferies" }, { name: "Robbie Mackay" }, { name: "Robert Austin" }, { name: "Roman Masek" }, { name: "Ryan Bigg" }, { name: "Ryan Griffith" }, { name: "Sam SAccone" }, { name: "Sam Saccone" }, { name: "Sean Anderson" }, { name: "Sean Kelley" }, { name: "Sebastian" }, { name: "Sergey Kluchkowsky" }, { name: "Shammel Lee" }, { name: "Simon Fridlund" }, { name: "Stefan Zerkalica" }, { name: "Steffen Schildknecht" }, { name: "Stephen Jordan" }, { name: "Stéphane Bachelier" }, { name: "Ted Hille" }, { name: "Thomas Rix" }, { name: "Tim Snadden" }, { name: "Timo Behrmann" }, { name: "Tom de Vries" }, { name: "Tomasz Pewiński" }, { name: "Tomasz Żyźniewski" }, { name: "Tony Abou-Assaleh" }, { name: "Tony Narlock" }, { name: "Toon Albers" }, { name: "Trevor Johnston" }, { name: "Ulexus" }, { name: "Viktor Nagy" }, { name: "Vitaliy Petrychuk" }, { name: "Vladislav Botvin" }, { name: "Walther Lalk" }, { name: "Will Binns-Smith" }, { name: "Zach Sitler" }, { name: "a5huh" }, { name: "aaronz8" }, { name: "adam-werner" }, { name: "brent.linville" }, { name: "cedrictools" }, { name: "cjroebuck" }, { name: "clatour" }, { name: "codejet" }, { name: "creynders" }, { name: "csterritt" }, { name: "d-nation" }, { name: "david" }, { name: "depoulo" }, { name: "dnewkerk" }, { name: "gdi2290" }, { name: "gratimax" }, { name: "gumballhead" }, { name: "h-tane" }, { name: "jarrad" }, { name: "joeytheman" }, { name: "jorin vogel" }, { name: "kwbock" }, { name: "kycool" }, { name: "lukesargeant" }, { name: "megawac" }, { name: "mendicantx" }, { name: "ndp" }, { name: "nuragic" }, { name: "paulfalgout" }, { name: "pdufour" }, { name: "philippm" }, { name: "radagaisus" }, { name: "raxer" }, { name: "rhubarbselleven" }, { name: "robert" }, { name: "satchmorun" }, { name: "skubus" }, { name: "steve flitcroft" }, { name: "testbrian" }, { name: "thylo" }, { name: "tkoomzaaskz" }, { name: "trevordixon" }, { name: "xescuGC" }, { name: "zourtne" }];