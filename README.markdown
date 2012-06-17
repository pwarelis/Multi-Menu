Multi Menu
============

This is an attempt at a multi-level menu for bootstrap.
Keep in mind that this is very basic at this point, there is room for improvement.
If you want me to keep improving this, post an issue and we'll see how it goes.

How to Use
----------

Create bootstrap dropdown markup and nest your submenus inside of it. Replace the `data-toggle` attribute with `data-multimenu` and you good to go!
Don't forget the css file!

Demo on [jsfiddle](http://jsfiddle.net/pwarelis/BHSHs/ "Multi-Menu demo")

Example
----------

```html
<ul class="nav nav-pills">
	<li class="active"><a href="#">Regular link</a></li>
	<li class="dropdown" id="menu1">
		<a class="dropdown-toggle" data-multimenu href="#menu1"> Dropdown <b class="caret"></b></a>
		<ul class="dropdown-menu">
			<li><a href="#">Action</a></li>
			<li><a href="#">Another action</a></li>
			<li>
				<a href="#">Submenu here</a>
				<ul class="dropdown-menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li>
						<a href="#">Submenu here</a>
						<ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">End of line</a></li>
							<li class="divider"></li>
							<li><a href="#">Separated link</a></li>
						</ul>
						</li>
					<li class="divider"></li>
					<li><a href="#">Separated link</a></li>
				</ul>
			</li>
			<li class="divider"></li>
			<li><a href="#">Separated link</a></li>
		</ul>
	</li>
</ul>
```

Enjoy!
 
Contact
-------

pwarelis at gmail dot com
