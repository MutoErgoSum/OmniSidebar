moduleAid.VERSION = '1.1.0';

this.setTransparency = function() {
	styleAid.unload('glassStyleTransparency');
	
	var sscode = '/*OmniSidebar CSS declarations of variable values*/\n';
	sscode += '@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\n';
	sscode += '@-moz-document url("chrome://browser/content/browser.xul") {\n';
	
	var alpha = prefAid.transparency /1000;
	
	var m = 128/0.75;
	var b = 128 -m;
	var color = Math.max(Math.round((alpha *m) +b), 0);
	
	sscode += '	.sidebar-box[renderabove] .omnisidebar_resize_box,\n';
	sscode += '	.sidebar-box:not([renderabove])[customizing] .sidebar-header,\n';
	sscode += '	.sidebar-box:not([renderabove]) {\n';
	sscode += '		background-color: rgba('+color+','+color+','+color+','+alpha+') !important;\n';
	sscode += '	}\n';
	
	sscode += '}';
	
	styleAid.load('glassStyleTransparency', sscode, true);
};

moduleAid.LOADMODULE = function() {
	styleAid.load('glassStyle', 'glass/glass');
	styleAid.load('glassStyleFF', 'glass/glass-ff5');
	styleAid.load('glassStyleGeneral', 'glass/glass-general');
	styleAid.load('glassStyleNative', 'glass/glass-nativeSidebars');
	styleAid.load('glassStyleFeed', 'glass/glass-feedbar');
	styleAid.load('glassStyleUpdScanner', 'glass/glass-updscanner');
	styleAid.load('glassStyleSimilarWeb', 'glass/glass-similarweb');
	styleAid.load('glassStyleDelicious', 'glass/glass-delicious');
	styleAid.load('glassStyleConsole', 'glass/glass-console');
	styleAid.load('glassStyleDMT', 'glass/glass-dmt');
	styleAid.load('glassStyleAddons', 'glass/glass-addons');
	styleAid.load('glassStyleStylish', 'glass/glass-stylish');
	styleAid.load('glassStyleDOMInspector', 'glass/glass-domi');
	styleAid.load('glassStylePocket', 'glass/glass-pocket');
	
	prefAid.listen('transparency', setTransparency);
	setTransparency();
};

moduleAid.UNLOADMODULE = function() {
	styleAid.unload('glassStyle');
	styleAid.unload('glassStyleFF');
	styleAid.unload('glassStyleGeneral');
	styleAid.unload('glassStyleNative');
	styleAid.unload('glassStyleFeed');
	styleAid.unload('glassStyleUpdScanner');
	styleAid.unload('glassStyleSimilarWeb');
	styleAid.unload('glassStyleDelicious');
	styleAid.unload('glassStyleConsole');
	styleAid.unload('glassStyleDMT');
	styleAid.unload('glassStyleAddons');
	styleAid.unload('glassStyleStylish');
	styleAid.unload('glassStyleDOMInspector');
	styleAid.unload('glassStylePocket');
	
	styleAid.unload('glassStyleTransparency');
	prefAid.unlisten('transparency', setTransparency);
};
