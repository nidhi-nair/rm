export default {
	getHtml: () => `
				<!DOCTYPE html>
		<html>
			<head>
				<title>Tabulator1</title>
				<meta charset="UTF-8" />
			</head>
			<style>
				.tabulator{position:relative;border:1px solid #999;background-color:#888;font-size:14px;text-align:left;overflow:hidden;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0)}.tabulator[tabulator-layout=fitDataFill] .tabulator-tableholder .tabulator-table{min-width:100%}.tabulator[tabulator-layout=fitDataTable]{display:inline-block}.tabulator.tabulator-block-select{user-select:none}.tabulator .tabulator-header{position:relative;box-sizing:border-box;width:100%;border-bottom:1px solid #999;background-color:#e6e6e6;color:#555;font-weight:700;white-space:nowrap;overflow:hidden;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator .tabulator-header.tabulator-header-hidden{display:none}.tabulator .tabulator-header .tabulator-header-contents{position:relative;overflow:hidden}.tabulator .tabulator-header .tabulator-header-contents .tabulator-headers{display:inline-block}.tabulator .tabulator-header .tabulator-col{display:inline-flex;position:relative;box-sizing:border-box;flex-direction:column;justify-content:flex-start;border-right:1px solid #aaa;background:#e6e6e6;text-align:left;vertical-align:bottom;overflow:hidden}.tabulator .tabulator-header .tabulator-col.tabulator-moving{position:absolute;border:1px solid #999;background:#cdcdcd;pointer-events:none}.tabulator .tabulator-header .tabulator-col .tabulator-col-content{box-sizing:border-box;position:relative;padding:4px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-header-popup-button{padding:0 8px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-header-popup-button:hover{cursor:pointer;opacity:.6}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title-holder{position:relative}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title{box-sizing:border-box;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title.tabulator-col-title-wrap{white-space:normal;text-overflow:clip}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-title-editor{box-sizing:border-box;width:100%;border:1px solid #999;padding:1px;background:#fff}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-header-popup-button+.tabulator-title-editor{width:calc(100% - 22px)}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter{display:flex;align-items:center;position:absolute;top:0;bottom:0;right:4px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #bbb}.tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols{position:relative;display:flex;border-top:1px solid #aaa;overflow:hidden;margin-right:-1px}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter{position:relative;box-sizing:border-box;margin-top:2px;width:100%;text-align:center}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter textarea{height:auto!important}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter svg{margin-top:3px}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter input::-ms-clear{width:0;height:0}.tabulator .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title{padding-right:25px}.tabulator .tabulator-header .tabulator-col.tabulator-sortable.tabulator-col-sorter-element:hover{cursor:pointer;background-color:#cdcdcd}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-col-sorter{color:#bbb}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-col-sorter.tabulator-col-sorter-element .tabulator-arrow:hover{cursor:pointer;border-bottom:6px solid #555}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-top:none;border-bottom:6px solid #bbb}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=ascending] .tabulator-col-content .tabulator-col-sorter{color:#666}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=ascending] .tabulator-col-content .tabulator-col-sorter.tabulator-col-sorter-element .tabulator-arrow:hover{cursor:pointer;border-bottom:6px solid #555}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=ascending] .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-top:none;border-bottom:6px solid #666}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=descending] .tabulator-col-content .tabulator-col-sorter{color:#666}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=descending] .tabulator-col-content .tabulator-col-sorter.tabulator-col-sorter-element .tabulator-arrow:hover{cursor:pointer;border-top:6px solid #555}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=descending] .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-bottom:none;border-top:6px solid #666;color:#666}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical .tabulator-col-content .tabulator-col-title{writing-mode:vertical-rl;text-orientation:mixed;display:flex;align-items:center;justify-content:center}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-col-vertical-flip .tabulator-col-title{transform:rotate(180deg)}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-col-title{padding-right:0;padding-top:20px}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable.tabulator-col-vertical-flip .tabulator-col-title{padding-right:0;padding-bottom:20px}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-col-sorter{justify-content:center;left:0;right:0;top:4px;bottom:auto}.tabulator .tabulator-header .tabulator-frozen{position:sticky;left:0;z-index:10}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-left{border-right:2px solid #aaa}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-right{border-left:2px solid #aaa}.tabulator .tabulator-header .tabulator-calcs-holder{box-sizing:border-box;min-width:600%;background:#f3f3f3!important;border-top:1px solid #aaa;border-bottom:1px solid #aaa}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row{background:#f3f3f3!important}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-header .tabulator-frozen-rows-holder{min-width:600%}.tabulator .tabulator-header .tabulator-frozen-rows-holder:empty{display:none}.tabulator .tabulator-tableholder{position:relative;width:100%;white-space:nowrap;overflow:auto;-webkit-overflow-scrolling:touch}.tabulator .tabulator-tableholder:focus{outline:none}.tabulator .tabulator-tableholder .tabulator-placeholder{box-sizing:border-box;display:flex;align-items:center;justify-content:center;width:100%}.tabulator .tabulator-tableholder .tabulator-placeholder[tabulator-render-mode=virtual]{min-height:100%;min-width:100%}.tabulator .tabulator-tableholder .tabulator-placeholder .tabulator-placeholder-contents{display:inline-block;text-align:center;padding:10px;color:#ccc;font-weight:700;font-size:20px;white-space:normal}.tabulator .tabulator-tableholder .tabulator-table{position:relative;display:inline-block;background-color:#fff;white-space:nowrap;overflow:visible;color:#333}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs{font-weight:700;background:#e2e2e2!important}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-top{border-bottom:2px solid #aaa}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-bottom{border-top:2px solid #aaa}.tabulator .tabulator-footer{border-top:1px solid #999;background-color:#e6e6e6;color:#555;font-weight:700;white-space:nowrap;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator .tabulator-footer .tabulator-footer-contents{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:5px 10px}.tabulator .tabulator-footer .tabulator-footer-contents:empty{display:none}.tabulator .tabulator-footer .tabulator-calcs-holder{box-sizing:border-box;width:100%;text-align:left;background:#f3f3f3!important;border-bottom:1px solid #aaa;border-top:1px solid #aaa;overflow:hidden}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row{display:inline-block;background:#f3f3f3!important}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-footer .tabulator-calcs-holder:only-child{margin-bottom:-5px;border-bottom:none}.tabulator .tabulator-footer>*+.tabulator-page-counter{margin-left:10px}.tabulator .tabulator-footer .tabulator-page-counter{font-weight:400}.tabulator .tabulator-footer .tabulator-paginator{flex:1;text-align:right;color:#555;font-family:inherit;font-weight:inherit;font-size:inherit}.tabulator .tabulator-footer .tabulator-page-size{display:inline-block;margin:0 5px;padding:2px 5px;border:1px solid #aaa;border-radius:3px}.tabulator .tabulator-footer .tabulator-pages{margin:0 7px}.tabulator .tabulator-footer .tabulator-page{display:inline-block;margin:0 2px;padding:2px 5px;border:1px solid #aaa;border-radius:3px;background:hsla(0,0%,100%,.2)}.tabulator .tabulator-footer .tabulator-page.active{color:#d00}.tabulator .tabulator-footer .tabulator-page:disabled{opacity:.5}.tabulator .tabulator-footer .tabulator-page:not(.disabled):hover{cursor:pointer;background:rgba(0,0,0,.2);color:#fff}.tabulator .tabulator-col-resize-handle{position:relative;display:inline-block;width:6px;margin-left:-3px;margin-right:-3px;z-index:10;vertical-align:middle}.tabulator .tabulator-col-resize-handle:hover{cursor:ew-resize}.tabulator .tabulator-col-resize-handle:last-of-type{width:3px;margin-right:0}.tabulator .tabulator-alert{position:absolute;display:flex;align-items:center;top:0;left:0;z-index:100;height:100%;width:100%;background:rgba(0,0,0,.4);text-align:center}.tabulator .tabulator-alert .tabulator-alert-msg{display:inline-block;margin:0 auto;padding:10px 20px;border-radius:10px;background:#fff;font-weight:700;font-size:16px}.tabulator .tabulator-alert .tabulator-alert-msg.tabulator-alert-state-msg{border:4px solid #333;color:#000}.tabulator .tabulator-alert .tabulator-alert-msg.tabulator-alert-state-error{border:4px solid #d00;color:#590000}.tabulator-row{position:relative;box-sizing:border-box;min-height:22px;background-color:#fff}.tabulator-row.tabulator-row-even{background-color:#efefef}.tabulator-row.tabulator-selectable:hover{background-color:#bbb;cursor:pointer}.tabulator-row.tabulator-selected{background-color:#9abcea}.tabulator-row.tabulator-selected:hover{background-color:#769bcc;cursor:pointer}.tabulator-row.tabulator-row-moving{border:1px solid #000;background:#fff}.tabulator-row.tabulator-moving{position:absolute;border-top:1px solid #aaa;border-bottom:1px solid #aaa;pointer-events:none;z-index:15}.tabulator-row .tabulator-row-resize-handle{position:absolute;right:0;bottom:0;left:0;height:5px}.tabulator-row .tabulator-row-resize-handle.prev{top:0;bottom:auto}.tabulator-row .tabulator-row-resize-handle:hover{cursor:ns-resize}.tabulator-row .tabulator-responsive-collapse{box-sizing:border-box;padding:5px;border-top:1px solid #aaa;border-bottom:1px solid #aaa}.tabulator-row .tabulator-responsive-collapse:empty{display:none}.tabulator-row .tabulator-responsive-collapse table{font-size:14px}.tabulator-row .tabulator-responsive-collapse table tr td{position:relative}.tabulator-row .tabulator-responsive-collapse table tr td:first-of-type{padding-right:10px}.tabulator-row .tabulator-cell{display:inline-block;position:relative;box-sizing:border-box;padding:4px;border-right:1px solid #aaa;vertical-align:middle;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tabulator-row .tabulator-cell.tabulator-frozen{display:inline-block;position:sticky;left:0;background-color:inherit;z-index:10}.tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-left{border-right:2px solid #aaa}.tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-right{border-left:2px solid #aaa}.tabulator-row .tabulator-cell.tabulator-editing{border:1px solid #1d68cd;outline:none;padding:0}.tabulator-row .tabulator-cell.tabulator-editing input,.tabulator-row .tabulator-cell.tabulator-editing select{border:1px;background:transparent;outline:none}.tabulator-row .tabulator-cell.tabulator-validation-fail{border:1px solid #d00}.tabulator-row .tabulator-cell.tabulator-validation-fail input,.tabulator-row .tabulator-cell.tabulator-validation-fail select{border:1px;background:transparent;color:#d00}.tabulator-row .tabulator-cell.tabulator-row-handle{display:inline-flex;align-items:center;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box{width:80%}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box .tabulator-row-handle-bar{width:100%;height:3px;margin-top:2px;background:#666}.tabulator-row .tabulator-cell .tabulator-data-tree-branch{display:inline-block;vertical-align:middle;height:9px;width:7px;margin-top:-9px;margin-right:5px;border-bottom-left-radius:1px;border-left:2px solid #aaa;border-bottom:2px solid #aaa}.tabulator-row .tabulator-cell .tabulator-data-tree-control{display:inline-flex;justify-content:center;align-items:center;vertical-align:middle;height:11px;width:11px;margin-right:5px;border:1px solid #333;border-radius:2px;background:rgba(0,0,0,.1);overflow:hidden}.tabulator-row .tabulator-cell .tabulator-data-tree-control:hover{cursor:pointer;background:rgba(0,0,0,.2)}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse{display:inline-block;position:relative;height:7px;width:1px;background:transparent}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse:after{position:absolute;content:"";left:-3px;top:3px;height:1px;width:7px;background:#333}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand{display:inline-block;position:relative;height:7px;width:1px;background:#333}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand:after{position:absolute;content:"";left:-3px;top:3px;height:1px;width:7px;background:#333}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle{display:inline-flex;align-items:center;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;height:15px;width:15px;border-radius:20px;background:#666;color:#fff;font-weight:700;font-size:1.1em}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle:hover{opacity:.7;cursor:pointer}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-close{display:initial}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-open{display:none}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle svg{stroke:#fff}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle .tabulator-responsive-collapse-toggle-close{display:none}.tabulator-row .tabulator-cell .tabulator-traffic-light{display:inline-block;height:14px;width:14px;border-radius:14px}.tabulator-row.tabulator-group{box-sizing:border-box;border-bottom:1px solid #999;border-right:1px solid #aaa;border-top:1px solid #999;padding:5px 5px 5px 10px;background:#ccc;font-weight:700;min-width:100%}.tabulator-row.tabulator-group:hover{cursor:pointer;background-color:rgba(0,0,0,.1)}.tabulator-row.tabulator-group.tabulator-group-visible .tabulator-arrow{margin-right:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #666;border-bottom:0}.tabulator-row.tabulator-group.tabulator-group-level-1{padding-left:30px}.tabulator-row.tabulator-group.tabulator-group-level-2{padding-left:50px}.tabulator-row.tabulator-group.tabulator-group-level-3{padding-left:70px}.tabulator-row.tabulator-group.tabulator-group-level-4{padding-left:90px}.tabulator-row.tabulator-group.tabulator-group-level-5{padding-left:110px}.tabulator-row.tabulator-group .tabulator-group-toggle{display:inline-block}.tabulator-row.tabulator-group .tabulator-arrow{display:inline-block;width:0;height:0;margin-right:16px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:0;border-left:6px solid #666;vertical-align:middle}.tabulator-row.tabulator-group span{margin-left:10px;color:#d00}.tabulator-popup-container{position:absolute;display:inline-block;box-sizing:border-box;background:#fff;border:1px solid #aaa;box-shadow:0 0 5px 0 rgba(0,0,0,.2);font-size:14px;overflow-y:auto;-webkit-overflow-scrolling:touch;z-index:10000}.tabulator-popup{padding:5px;border-radius:3px}.tabulator-tooltip{max-width:Min(500px,100%);padding:3px 5px;border-radius:2px;box-shadow:none;font-size:12px;pointer-events:none}.tabulator-menu .tabulator-menu-item{position:relative;box-sizing:border-box;padding:5px 10px;user-select:none}.tabulator-menu .tabulator-menu-item.tabulator-menu-item-disabled{opacity:.5}.tabulator-menu .tabulator-menu-item:not(.tabulator-menu-item-disabled):hover{cursor:pointer;background:#efefef}.tabulator-menu .tabulator-menu-item.tabulator-menu-item-submenu{padding-right:25px}.tabulator-menu .tabulator-menu-item.tabulator-menu-item-submenu:after{display:inline-block;position:absolute;top:calc(5px + .4em);right:10px;height:7px;width:7px;content:"";border-color:#aaa;border-style:solid;border-width:1px 1px 0 0;vertical-align:top;transform:rotate(45deg)}.tabulator-menu .tabulator-menu-separator{border-top:1px solid #aaa}.tabulator-edit-list{max-height:200px;font-size:14px;overflow-y:auto;-webkit-overflow-scrolling:touch}.tabulator-edit-list .tabulator-edit-list-item{padding:4px;color:#333;outline:none}.tabulator-edit-list .tabulator-edit-list-item.active{color:#fff;background:#1d68cd}.tabulator-edit-list .tabulator-edit-list-item.active.focused{outline:1px solid hsla(0,0%,100%,.5)}.tabulator-edit-list .tabulator-edit-list-item.focused{outline:1px solid #1d68cd}.tabulator-edit-list .tabulator-edit-list-item:hover{cursor:pointer;color:#fff;background:#1d68cd}.tabulator-edit-list .tabulator-edit-list-placeholder{padding:4px;color:#333;text-align:center}.tabulator-edit-list .tabulator-edit-list-group{border-bottom:1px solid #aaa;padding:6px 4px 4px;color:#333;font-weight:700}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-2,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-2{padding-left:12px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-3,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-3{padding-left:20px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-4,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-4{padding-left:28px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-5,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-5{padding-left:36px}.tabulator.tabulator-ltr{direction:ltr}.tabulator.tabulator-rtl{text-align:initial;direction:rtl}.tabulator.tabulator-rtl .tabulator-header .tabulator-col{text-align:initial;border-left:1px solid #aaa;border-right:initial}.tabulator.tabulator-rtl .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols{margin-right:0;margin-left:-1px}.tabulator.tabulator-rtl .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title{padding-right:0;padding-left:25px}.tabulator.tabulator-rtl .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter{left:8px;right:auto}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell{border-right:initial;border-left:1px solid #aaa}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell .tabulator-data-tree-branch{margin-right:0;margin-left:5px;border-bottom-left-radius:0;border-bottom-right-radius:1px;border-left:initial;border-right:2px solid #aaa}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell .tabulator-data-tree-control{margin-right:0;margin-left:5px}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-left{border-left:2px solid #aaa}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-right{border-right:2px solid #aaa}.tabulator.tabulator-rtl .tabulator-row .tabulator-col-resize-handle:last-of-type{width:3px;margin-left:0;margin-right:-3px}.tabulator.tabulator-rtl .tabulator-footer .tabulator-calcs-holder{text-align:initial}.tabulator-print-fullscreen{position:absolute;top:0;bottom:0;left:0;right:0;z-index:10000}body.tabulator-print-fullscreen-hide>:not(.tabulator-print-fullscreen){display:none!important}.tabulator-print-table{border-collapse:collapse}.tabulator-print-table .tabulator-data-tree-branch{display:inline-block;vertical-align:middle;height:9px;width:7px;margin-top:-9px;margin-right:5px;border-bottom-left-radius:1px;border-left:2px solid #aaa;border-bottom:2px solid #aaa}.tabulator-print-table .tabulator-print-table-group{box-sizing:border-box;border-bottom:1px solid #999;border-right:1px solid #aaa;border-top:1px solid #999;padding:5px 5px 5px 10px;background:#ccc;font-weight:700;min-width:100%}.tabulator-print-table .tabulator-print-table-group:hover{cursor:pointer;background-color:rgba(0,0,0,.1)}.tabulator-print-table .tabulator-print-table-group.tabulator-group-visible .tabulator-arrow{margin-right:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #666;border-bottom:0}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-1 td{padding-left:30px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-2 td{padding-left:50px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-3 td{padding-left:70px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-4 td{padding-left:90px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-5 td{padding-left:110px!important}.tabulator-print-table .tabulator-print-table-group .tabulator-group-toggle{display:inline-block}.tabulator-print-table .tabulator-print-table-group .tabulator-arrow{display:inline-block;width:0;height:0;margin-right:16px;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:0;border-left:6px solid #666;vertical-align:middle}.tabulator-print-table .tabulator-print-table-group span{margin-left:10px;color:#d00}.tabulator-print-table .tabulator-data-tree-control{display:inline-flex;justify-content:center;align-items:center;vertical-align:middle;height:11px;width:11px;margin-right:5px;border:1px solid #333;border-radius:2px;background:rgba(0,0,0,.1);overflow:hidden}.tabulator-print-table .tabulator-data-tree-control:hover{cursor:pointer;background:rgba(0,0,0,.2)}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-collapse{display:inline-block;position:relative;height:7px;width:1px;background:transparent}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-collapse:after{position:absolute;content:"";left:-3px;top:3px;height:1px;width:7px;background:#333}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-expand{display:inline-block;position:relative;height:7px;width:1px;background:#333}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-expand:after{position:absolute;content:"";left:-3px;top:3px;height:1px;width:7px;background:#333}
/*# sourceMappingURL=tabulator.min.css.map */
			</style>
			<style>
				.loader {
					display: none;
					top: 50%;
					left: 50%;
					position: absolute;
					transform: translate(-50%, -50%);	
					z-index:99;
					//background-color: aliceblue;
					background-color: rgba(255,255,255,0.9);
					border-radius: 5px;
					padding: 8px;
					height: 96%;
					width: 97%;
				}
				.loading {
					border: 4px solid #ccc;
					width: 60px;
					height: 60px;
					border-radius: 50%;
					border-top-color: #FF000F;
					border-left-color: #FF000F;
					animation: spin 1s infinite ease-in;

					position: absolute;
					left: 50%;
					top: 25%;
				}
				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}

					100% {
						transform: rotate(360deg);
					}
				}
			</style>
			<body>
				<link href="https://unpkg.com/tabulator-tables/dist/css/tabulator.min.css" rel="stylesheet">
				<script type="text/javascript" src="https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js"></script>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
				<script src="https://cdn.jsdelivr.net/npm/i18next@X.X.X/dist/umd/i18next.min.js"></script>

			<div class="loader">
				<div class="loading"></div>
				<p id="loadingId" style="left: 50.5%; position: absolute; top:35%">Loading...<p>
			</div>
			<div id="wp-popup-div" class="modal" style="position:absolute; top: 5%; left: 5%; max-width: 100%!important">
				<div id="iFrame-wp-popup-table"></div>
			</div>			
			<script>
				let wpPopupTable; let OPRTYPE;
				function setupWPPopupTabulator(rowData, tableData) {
					let tableConfig = getWPPopupColumnsConfig(rowData);
					let wpPopupAPIBody = {machineGroup: resourceSelect , OPRTYPE: OPRTYPE};
					wpPopupTable = new Tabulator("#iFrame-wp-popup-table", {
						ajaxURL: baseURL + "/getmaterialproperty",
						ajaxContentType: {
							body: function(url, config, params) {
								return JSON.stringify(wpPopupAPIBody);
							},
						},
						ajaxConfig: {
							method: "POST",
							headers: {
								"Accept": "application/json",
								"Content-type": 'application/json; charset=utf-8',
								"Authorization": getCookie("tokensso"),
							},
						},
						ajaxResponse: function (url, params, response) {							
							return {
								data: (OPRTYPE === 9 || OPRTYPE === 6 || OPRTYPE === 7 ) ? response.filter(x => x.MATERIAL_CODE != interMediateMaterial) : response,
							};
						},
						selectable: 1,
						maxHeight:"500px",
						pagination: true,
						paginationMode: "remote",
						layout: "fitColumns",
						locale: true,
						langs: {        
							"de": { //German language definition
								"pagination":{
									"first":"Erste",
									"last":"Letzte",
									"prev":"Vorige",
									"next":"Nächste"									
								},
							},
						},
						...tableConfig
					});

					wpPopupTable.on("rowSelected", function() {						
						var selectedData = wpPopupTable.getSelectedData();
						const index = tableData.findIndex(x => JSON.stringify(x) === JSON.stringify(rowData));
						tableData.splice(index, 1);	

						rowData.MATERIAL_COMMAND_CODE = selectedData[0].MATERIAL_CODE;
						rowData.MATERIAL_COMMAND = selectedData[0].MATERIAL_NAME_SHORT;
						rowData.UNIT = selectedData[0].UNIT;
						rowData.TARGET_WORK_PLACE = selectedData[0].TARGET_WORK_PLACE;
						rowData.SECTION = selectedData[0].SECTION;
						tableData.push(rowData);

						const sortedlist = tableData.sort((r1, r2) => (Number(r1.SEQ_NO) > Number(r2.SEQ_NO)) ? 1 : (Number(r1.SEQ_NO) < Number(r2.SEQ_NO) ? -1 : 0));
						table.replaceData(sortedlist);

						$('#wp-popup-div').modal().hide();						
            $('.jquery-modal').removeClass('blocker');
						updateSearchViewButtonText();
					});
				};
				function getWPPopupColumnsConfig(rowData) {
					var columnsConfig =  {
						columns: [
							{ title: i18next.t(getHeaderCode(rowData.RECIPE_ITEM_TYPE)), field: "MATERIAL_CODE", headerFilter: true, tooltip: true, headerTooltip: true, minWidth: '160px'},
							{ title: i18next.t(getHeaderName(rowData.RECIPE_ITEM_TYPE)), field: "MATERIAL_NAME_SHORT", headerFilter: true, tooltip: true, headerTooltip: true, minWidth: '160px'},
							{ title: i18next.t("UNIT"), field: "UNIT", visible: rowData.RECIPE_ITEM_TYPE === 'DOS' ? true :true },
							{ title: i18next.t("TARGET WORKPLACE"), field: "TARGET_WORK_PLACE"},
							{ title: i18next.t("SECTION"), field: "SECTION"},
						],
						placeholder: i18next.t("No Data available")
					}
					return columnsConfig;
				};				
				function getHeaderCode(recipeItemType) {
					switch(recipeItemType) {
						case "DOS": return 'MATERIAL CODE';
						case "CMD": return 'PROPERTY CODE';
						case "ENG": return 'ENERGY CODE';
						case "BYP": return 'BY PRODUCT CODE';
						default: return 'MATERIAL CODE'; 
					}				
				};				
				function getHeaderName(recipeItemType) {
					switch(recipeItemType) {
						case "DOS": return 'MATERIAL NAME';
						case "CMD": return 'PROPERTY NAME';
						case "ENG": return 'ENERGY NAME';
						case "BYP": return 'BY PRODUCT NAME';
						default: return 'MATERIAL NAME'; 
					}				
				};
				function getOPRTYPE(recipeItemType) {
					switch(recipeItemType) {
						case "DOS": return 9;
						case "CMD": return 2;
						case "ENG": return 6;
						case "BYP": return 7;
						default: return 1; 
					}
				}

				function getColumnConfiguration(recipeType) {
					$.ajax({
						url: baseURL + "/recipe/column-configuration/" + recipeType,
            type: "GET",
						headers : {'Authorization': getCookie("tokensso") },
						async: false,
            success: function (data) {
							columnConfiguration = data;
							checkedCheckBoxconfig();
            },
            error: function (error) { }
          });
				}

				function getCookie(name) {
        	const value = "; "+document.cookie+"";
        	const parts = value.split("; "+name+"=");
        	if (parts.length === 2) return parts.pop().split(';').shift();
      	}
				</script>

				<style>
					.textinput {
						width: 9%;
						padding: 6px 10px;
						margin: 3px 0;
						display: inline-block;
						border: 1px solid #ccc;
						border-radius: 20px;
						box-sizing: border-box;
					}
					.calculationDiv {
						border-radius: 5px;
						background-color: #f2f2f2;
						padding: 1px 0px 0px 10px;
						margin-top: 1px;
					}
				</style>
				<div id='calculationDiv' class='calculationDiv' hidden>
					<label id="mainMaterialsBoneDryLabel">Main Materials Bone Dry</label>
    			<input type="number" class="textinput" onfocusout="onMainMaterialBoneDryChange()" id="mainMaterialBoneDryInput">
					<label id="weightUnit"></label>
    			<label id="mainMaterialInLabel" style="margin-left: 15px">Main Material In %</label>
    			<input type="number" class="textinput" id="mainMaterialPerInput" disabled>
					<label id="totalQuanity">Total Quanity</label>
    			<input type="number" class="textinput" onfocusout="onTotalWeightChange()" id="totalQuanityInput">
				</div>
				<div id='columnVisibilityDiv' class='calculationDiv' hidden>
				  <label id="lblcolumnvisibility" for="bdry">Column visibility</label>
					<input style="margin-left: 15px;" type="checkbox" id="chkbdry" name="bdry" onclick="chkBdryClick()" />
					<label id="lblbdry" for="bdry"> %BDRY</label>
					<input style="margin-left: 15px" type="checkbox" id="chkweight" name="WEIGHT" onclick="chkWeightClick()" />
					<label id="lblweight" for="bdry">WEIGHT</label>
				</div>
				<div id='buttonDiv' style="float: right; margin: 7px;" hidden>
					<button id="checkButton" onclick="comparisonCheck()">Check</button>
					<button id="recipeButton" onclick="createRecipe()">Save Recipe</button>
					<button id="newButton" onclick="addNewRow()">New</button>
				</div><br><br>
				<div id="iFrame-table"></div>
				<script>
					let table; let tableData = []; let message = {};
					let apiURL; let apiBody; let baseURL; let interMediateMaterial;
					let weightUnit; let volumeUnit;let recipeFCTOption ; let recipeItemType;let recipeClass;
					let resourceSelect; let targetDryContent = 0; let mainMaterialBoneDry = 0; let columnConfiguration = [];
					let oldTotalWeight = 0; let newTotalWeight = 0;
					function setupTabulator() {
						let tableConfig = getColumnsConfig();
						if(apiURL != undefined) {
							document.getElementById('recipeButton').innerText = i18next.t('Save Recipe');
							table = new Tabulator("#iFrame-table", {
								ajaxURL: apiURL,
								ajaxContentType:{
									body: function(url, config, params){
										return JSON.stringify(apiBody);
									},
								},
								ajaxConfig:{
									method:"POST",
									headers: {
										"Accept": "application/json",
										"Content-type": 'application/json; charset=utf-8',
										"Authorization": getCookie("tokensso"),
									},
								},
								ajaxResponse: !tableConfig?.isEmpty && function (url, params, response) {
									let last_page = 1;
									return {
										data: response,
										last_page
									};
								},
								dataLoaderLoading: i18next.t('Loading'),
								dataLoaderError: i18next.t('Error'),
								maxHeight:"500px",
								pagination: true,
								rowFormatter:function(row){
								let data = row.getData();
								row.getCells().forEach((cell) => {
									let fieldName = cell.getField();
									const field = ["MATERIAL_COMMAND_CODE","MATERIAL_COMMAND","UNIT","CALC_MINIMUM","CALC_MAXIMUM","TARGET_WORK_PLACE"];
									if(field.includes(fieldName)) {
									  	cell.getElement().style.backgroundColor="#dbdbdb";
										} else if(fieldName == 'VALUE_PERCENTAGE') {
											if(!disableValueField(row.getData())) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										}else if(fieldName == 'TARGET_VALUE_WEIGHT') {
											if(!disableWeightField(row.getData())) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										} else if(fieldName == 'IN_VAL') {
											if((data.VALUE_PERCENTAGE == "" || data.VALUE_PERCENTAGE == null)) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										}else if(fieldName == 'INPUT_MINIMUM') {
											if(data.VALUE_PERCENTAGE == "" || data.VALUE_PERCENTAGE == null || data.IN_VAL == "" || data.IN_VAL == null) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										} else if(fieldName == 'INPUT_MAXIMUM') {
											if(data.VALUE_PERCENTAGE == "" || data.VALUE_PERCENTAGE == null || data.IN_VAL == "" || data.IN_VAL == null) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										}

								});

								},
								//paginationSize: 1,
								paginationMode: "remote",
								layout:"fitColumns",
								locale: true,
								langs: {        
									"de": { //German language definition
										"pagination":{
											"first":"Erste",
											"last":"Letzte",
											"prev":"Vorige",
											"next":"Nächste"									
										},
									},
								},
								...tableConfig
							});
						} else {
							document.getElementById('recipeButton').innerText = i18next.t('Create Recipe');
							table = new Tabulator("#iFrame-table", {								
								data: tableData,
								maxHeight:"500px",
								pagination: true,
								paginationSize: 1,
								rowFormatter:function(row){
								let data = row.getData();
								row.getCells().forEach((cell) => {
									let fieldName = cell.getField();
									const field = ["MATERIAL_COMMAND_CODE","MATERIAL_COMMAND","UNIT","CALC_MINIMUM","CALC_MAXIMUM","TARGET_WORK_PLACE"];
									if(field.includes(fieldName)) {
									  	cell.getElement().style.backgroundColor="#dbdbdb";
										} else if(fieldName == 'VALUE_PERCENTAGE') {
											if(!disableValueField(row.getData())) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										}else if(fieldName == 'TARGET_VALUE_WEIGHT') {
											if(!disableWeightField(row.getData())) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										} else if(fieldName == 'IN_VAL') {
											if((data.VALUE_PERCENTAGE == "" || data.VALUE_PERCENTAGE == null)) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										}else if(fieldName == 'INPUT_MINIMUM') {
											if(data.VALUE_PERCENTAGE == "" || data.VALUE_PERCENTAGE == null || data.IN_VAL == "" || data.IN_VAL == null) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										} else if(fieldName == 'INPUT_MAXIMUM') {
											if(data.VALUE_PERCENTAGE == "" || data.VALUE_PERCENTAGE == null || data.IN_VAL == "" || data.IN_VAL == null) {
												cell.getElement().style.backgroundColor="#dbdbdb";
											} else {
											  cell.getElement().style.backgroundColor="";
											}
										}

								});

								},
								paginationMode: "remote",
								layout:"fitColumns",
								locale: true,
								langs: {        
									"de": { //German language definition
										"pagination":{
											"first":"Erste",
											"last":"Letzte",
											"prev":"Vorige",
											"next":"Nächste"									
										},
									},
								},
								...tableConfig
							});
						}

						table.on("dataProcessed", function() {							
							updateSearchViewButtonText();
						});	

						table.on("scrollVertical", function(top){
							updateSearchViewButtonText();
						});
					};

					function getColumnsConfig() {
						var columnsConfig =  {
							columns: [		
								{ title: i18next.t("GRP"), field: "GROUP_NUMBER", editor:"input", tooltip:true,},
								{ title: i18next.t("SEQ"), field: "SEQ_NO", editor:"input", tooltip:true,
									cellEdited: function(cell) {
										var tableData = table.getData();
										let tempSeqNo = Number(cell.getRow().getData().SEQ_NO);
										let greaterSeqRow = tableData.filter(x => Number(x.SEQ_NO) > tempSeqNo);
										let count = 1;
										greaterSeqRow.forEach((x) => { 
											x.SEQ_NO = tempSeqNo + count;
											count++;
											return x;
										});
										const sortedlist = tableData.sort((r1, r2) => (Number(r1.SEQ_NO) > Number(r2.SEQ_NO)) ? 1 : (Number(r1.SEQ_NO) < Number(r2.SEQ_NO) ? -1 : 0));
										table.replaceData(sortedlist);

										updateSearchViewButtonText();
									},
								},
								{ title: i18next.t("CMD"), field: "RECIPE_ITEM_TYPE", editor:"list", tooltip:true,
									editorParams: {values: recipeItemType},
									cellEdited: function(cell) {
										onUpdateTable(cell);
										cell.getRow().update({										
											"MATERIAL_COMMAND_CODE" : '',
											"MATERIAL_COMMAND" : '',
											"UNIT" : '',
											"VALUE_PERCENTAGE" : '',
											"TARGET_VALUE_WEIGHT" : '',
											"TARGET_WORK_PLACE" :'',
										});										
									},
								},
								{ title: i18next.t("SEARCH"), align:"center", formatter: cellSearch,
									cellClick: function(e, cell) {
										OPRTYPE = getOPRTYPE(cell.getRow().getData().RECIPE_ITEM_TYPE);
										setupWPPopupTabulator(cell.getRow().getData(), table.getData());
										$('#wp-popup-div').modal('show');
										//message.messageEmitterName = 'SEARCH';
										//message.Message = {"rowData" : cell.getRow().getData(), "tableData" : table.getData()};
										//window.parent.postMessage(message, '*');
									},
								},
								{ title: i18next.t("Material/Prop.C"), field: "MATERIAL_COMMAND_CODE", tooltip:true },
								{ title: i18next.t("NAME"), field: "MATERIAL_COMMAND", tooltip:true },
								{ title: i18next.t("TARGET"), field: "VALUE_PERCENTAGE", editor:"input", tooltip:true,visible: columnConfiguration.includes('%BDRY') ? true: false,
									editable: function(cell) { return disableValueField(cell.getRow().getData());},
									cellEdited: function(cell) {
										onUpdateTable(cell);
										onValueChange();
										onTargetValueChange();
									}
								},
								{ title: i18next.t("UNIT"), field: "UNIT", tooltip:true },
								{ title: i18next.t("LIMIT TYPE"), field: "IN_VAL", editor:"list", tooltip:true,
									editorParams: {values: {"A" : "Absolute", "P" : "Percentage", "R" : "Relative"}},
									editable: function(cell) {
										let rowData = cell.getRow().getData();
										return rowData.VALUE_PERCENTAGE == "" || rowData.VALUE_PERCENTAGE == null? false : true;
									},
									cellEdited: function(cell) {
										onUpdateTable(cell);
										onTargetValueChange();
									}
								},								
                { title: i18next.t("MIN"), field: "INPUT_MINIMUM", editor:"input", tooltip:true,
									editable: function(cell) {
										let rowData = cell.getRow().getData();
										return rowData.VALUE_PERCENTAGE == "" || rowData.VALUE_PERCENTAGE == null || rowData.IN_VAL == "" || rowData.IN_VAL == null? false : true;
									},
									cellEdited: function(cell) {
										onUpdateTable(cell);
										onTargetValueChange();
									}
								},
								{ title: i18next.t("MAX"), field: "INPUT_MAXIMUM", editor:"input", tooltip:true,
									editable: function(cell) {
										let rowData = cell.getRow().getData();
										return rowData.VALUE_PERCENTAGE == "" || rowData.VALUE_PERCENTAGE == null || rowData.IN_VAL == "" || rowData.IN_VAL == null? false : true;
									},
									cellEdited: function(cell) {
										onUpdateTable(cell);
										onTargetValueChange();
									}
								},
								{ title: i18next.t("CAL MIN"), field: "CALC_MINIMUM", tooltip:true },
								{ title: i18next.t("CAL MAX"), field: "CALC_MAXIMUM", tooltip:true },
								{ title: i18next.t("WEIGHT"), field: "TARGET_VALUE_WEIGHT", editor:"input", tooltip:true,visible: columnConfiguration.includes('WEIGHT') ? true: false,
									editable: function(cell) { return disableWeightField(cell.getRow().getData());},
									cellEdited: function(cell) {
										onWeightChange();
										onTargetValueChange();
									}
								},
								{ title: i18next.t("FCT"), field: "RECIPE_FUNCTION", editor:"list", tooltip:true,
									editorParams: {values: recipeFCTOption},
									cellEdited: function(cell) {
										var rowData = cell.getRow().getData();
										if(rowData.RECIPE_ITEM_TYPE == 'DOS' || rowData.RECIPE_ITEM_TYPE == 'ENG' ||rowData.RECIPE_ITEM_TYPE == 'BYP') {											
											$.ajax({
												url: baseURL + "/recipe/getproperty-unit/" + resourceSelect + "/" + rowData.RECIPE_FUNCTION + "/" + rowData.MATERIAL_COMMAND_CODE,
              					type: "GET",
              					success: function (data) {
													cell.getRow().update({
														"PROPERTY_CODE" : data.PROPERTY_CODE,
														"UNIT" : data.UNIT
													});
               					},
												error: function (error) { }
            					});
										}
										cell.getRow().update({										
											"VOLUME" : '',
											"BALES" : '',
											"VALUE_PERCENTAGE" : '',
											"TARGET_VALUE_WEIGHT" : '',
										});
									}
								},
								{ title: i18next.t("WORKPLACE"), field: "TARGET_WORK_PLACE", tooltip:true },						
								{ title: i18next.t("DELETE"), field: "customColumn2", align: "center", formatter: "tickCross", editor: true,
									cellClick: function(e, cell) {
										onUpdateTable(cell);
									}
								},
								{ title: i18next.t("VIEW"), align:"center", formatter: cellView, visible: true,
									cellClick: function(e, cell) {
										message.messageEmitterName = 'VIEW';
										message.Message = {"rowData" : cell.getRow().getData()};
										window.parent.postMessage(message, '*');
									},
								}
							],
							placeholder: i18next.t("No Data Available")
						}
						return columnsConfig;
					};									
					var cellView = function(cell, formatterParams, onRendered) { 
						let recipeNo = cell.getRow().getData().ASSOCIATE_RECIPE_NUMBER;
					 if(recipeNo) { 
							return '<button class="viewButton" type="button">View</button>';
						} else {
							return '<button class="viewButton" type="button" disabled>View</button>';
						}
					};
					var cellSearch = function(cell, formatterParams, onRendered) { 
						return '<button class="searchButton" type="button">Search</button>';
					};

					function addNewRow() {
					  let rowCount  = table.getData().length;
						const sampleRow = getColumnsConfig();
      			const newRow = { ...sampleRow };
     				Object.keys(newRow).forEach((i) => (newRow[i] = ""));
						table.addRow(newRow, false,rowCount);

						updateSearchViewButtonText();
					};

					function createRecipe() {
						message.messageEmitterName = 'CREATE';
						$('#recipeButton').prop('disabled', true);
						message.Message = {"rowData" : undefined, "tableData" : table.getData()};
						window.parent.postMessage(message, '*');
					};

					function comparisonCheck() {
						document.getElementsByClassName("loader")[0].style.display = "block";
						message.messageEmitterName = 'CHECK';
						message.Message = {"rowData" : undefined, "tableData" : table.getData()};
						window.parent.postMessage(message, '*');
					};

					function roundFunction(num, fixDec) {
						return +(Math.round(num + "e+" + fixDec)  + "e-" + fixDec);
					}

          function onUpdateTable(cell) {
						let rowData = cell.getRow().getData();
						if(rowData.VALUE_PERCENTAGE == '' || rowData.VALUE_PERCENTAGE ==  null) {
							cell.getRow().update({
							  "TARGET_VALUE_WEIGHT" : '',
								"IN_VAL" : '',
								"INPUT_MINIMUM" : '',
								"INPUT_MAXIMUM" : '',
								"CALC_MINIMUM" : '',
								"CALC_MAXIMUM" : ''
							});
						}
					}
					
					function disableValueField(currentRow) {
						let isEditable = true;
						if(currentRow.RECIPE_FUNCTION == '' || currentRow.RECIPE_FUNCTION == undefined || currentRow.RECIPE_ITEM_TYPE == 'BYP' || currentRow.RECIPE_ITEM_TYPE == 'ENG' || currentRow.RECIPE_ITEM_TYPE == 'CMD') {
							if(currentRow.RECIPE_ITEM_TYPE == 'BYP' || currentRow.RECIPE_ITEM_TYPE == 'ENG' ||currentRow.RECIPE_ITEM_TYPE == 'CMD' ){
								return isEditable = true;
							}else{
								return isEditable = false;
							}
							
						} else {
							if(currentRow.RECIPE_ITEM_TYPE == 'CMD') {
								return isEditable = true;
							} else if(currentRow.RECIPE_ITEM_TYPE == 'DOS') {
								if(currentRow.RECIPE_FUNCTION == 'CON') {
									isEditable = true;
								} else {
									isEditable = true;
								}
							} else if(currentRow.RECIPE_ITEM_TYPE == 'ENG') {
									isEditable = true;
							}else if(currentRow.RECIPE_ITEM_TYPE == 'BYP') {
									isEditable = true;
							} else {
								isEditable = false;
							}
						}
						console.log(isEditable);
						return isEditable;
					}
					function disableWeightField(currentRow) {						
						let isEditable = true;
						if( currentRow.RECIPE_FUNCTION == '' || currentRow.RECIPE_FUNCTION == undefined) {
							return isEditable = false;
						} else {
							if(currentRow.RECIPE_ITEM_TYPE == 'CMD') {
								return isEditable = false;
							} else if(currentRow.RECIPE_ITEM_TYPE =='DOS') {
								if(currentRow.RECIPE_FUNCTION=='CAL' || currentRow.BALE_WEIGHT > 0) {
									isEditable = false;
								} else {
									isEditable = true;
								}
							} else if(currentRow.RECIPE_ITEM_TYPE == 'ENG') {
									isEditable = false;
							} else if(currentRow.RECIPE_ITEM_TYPE == 'BYP') {
									isEditable = true;
							} else {
								isEditable = false;
							}
						}
						return isEditable;
					}
					
					function onValueChange() {
						var tableData = table.getData();
						var roundDigit = 3;
						if(tableData.length > 0) {
							let sv_mainMtrlBoneDry = roundFunction(mainMaterialBoneDry, 1);
							let totalBoneDry = 0; let totalVolume = 0; let totalWeight = 0; let totalper = 0; let totFiller = 0;
							for(let i = 0; i < tableData.length; i++) {
								if(tableData[i].RECIPE_ITEM_TYPE != 'CMD') {
								  if(tableData[i].RECIPE_ITEM_TYPE != 'BYP') {
										let weight = 0; let per = 0; let boneDry = 0;
										 per = tableData[i].VALUE_PERCENTAGE == '' ? 0 : tableData[i].VALUE_PERCENTAGE;
										weight = Number(tableData[i].TARGET_VALUE_WEIGHT);
										if(tableData[i].RECIPE_FUNCTION == 'FIX') {
											boneDry = Number(mainMaterialBoneDry * per / 100);
											weight = boneDry;
											totalper = totalper + Number(tableData[i].VALUE_PERCENTAGE);
											totalWeight = totalWeight + weight;
										} 
										if(isNaN(weight)) {
											weight = 0;
										}
										if(weight == Infinity) {
											weight = 0;
										}
										weight=roundFunction(weight,roundDigit);
										if(weight > 0) {
											tableData[i].TARGET_VALUE_WEIGHT = weight;
										}else{
										tableData[i].TARGET_VALUE_WEIGHT = '';
										}
										totalBoneDry = Number(totalBoneDry) + boneDry;
										//totalWeight = totalWeight + weight;
									}
								}
							}
							for(let i = 0; i < tableData.length; i++) {
								if(tableData[i].RECIPE_ITEM_TYPE == 'BYP') {
									let weight = 0; let per = 0; let boneDry = 0;
									per = tableData[i].VALUE_PERCENTAGE == '' ? 0 : tableData[i].VALUE_PERCENTAGE;
									weight = totalBoneDry*per/100;
									if(isNaN(weight)) {
										weight = 0;
									}
									if(weight == Infinity) {
										weight = 0;
									}
									weight=roundFunction(weight,roundDigit);
									totalWeight = totalWeight - weight;
									if(weight >= 0) {
										tableData[i].TARGET_VALUE_WEIGHT = weight;
									}
								}
							}
							table.replaceData(tableData);

							document.getElementById("mainMaterialBoneDryInput").value = Number(sv_mainMtrlBoneDry).toFixed(2);
							document.getElementById("mainMaterialPerInput").value = Number(totalper).toFixed(2);
							document.getElementById("totalQuanityInput").value = newTotalWeight = Number(totalWeight).toFixed(2);
							message.messageEmitterName = 'CALCULATED_VALUE_WITHOUT_RECIPE_ERROR_MESSAGE';
							message.Message = {"mainMaterialBoneDry" : sv_mainMtrlBoneDry, "SPWT" : 0, "GBT": 0, "PER": totalper, "totalWeight": totalWeight, "totalVolumn": 0, "filler": 0, "TDC": 0, "DC": 0, "errorMessage": ''};
							window.parent.postMessage(message, '*');
						}
					}

					function onWeightChange() {
						var tableData = table.getData();
						var roundDigit=3;
						if(tableData.length > 0) {
							let sv_mainMtrlBoneDry = roundFunction(mainMaterialBoneDry, 1);
							let totalBoneDry = 0; let totalVolume = 0; let totalWeight = 0; let totalper = 0; let totFiller = 0;
							for(let i = 0; i < tableData.length; i++) {
								if(tableData[i].RECIPE_ITEM_TYPE != 'CMD') {
									if(tableData[i].RECIPE_ITEM_TYPE != 'BYP') {
										let weight = 0; let per = 0; let boneDry = 0;
										per=roundFunction(tableData[i].VALUE_PERCENTAGE,2);
										weight = Number(tableData[i].TARGET_VALUE_WEIGHT);
										if(tableData[i].RECIPE_FUNCTION == 'FIX') {
											boneDry = weight;
											weight = boneDry;
											per=weight*100/mainMaterialBoneDry;
											totalper = totalper + Number(per);
											totalWeight = totalWeight + weight;
										} 
										if(isNaN(weight)) {
											weight = 0;
										}
										if(weight == Infinity) {
											weight = 0;
										}
										if(isNaN(per)) {
											per = 0;
										}
										if(per == Infinity) {
											per = 0;
										}
										weight=roundFunction(weight,roundDigit);
										if(per >= 0) {
											tableData[i].VALUE_PERCENTAGE=roundFunction(per,2);
										}										
										totalBoneDry = Number(totalBoneDry) + boneDry;
										//totalWeight = totalWeight + weight;
									}
								}
							}
							for(let i = 0; i < tableData.length; i++) {
								if(tableData[i].RECIPE_ITEM_TYPE == 'BYP') {
									let weight = 0; let per = 0; let boneDry = 0;
									per = tableData[i].VALUE_PERCENTAGE == '' ? 0 : tableData[i].VALUE_PERCENTAGE;
									weight = Number(tableData[i].TARGET_VALUE_WEIGHT);
									per=weight*100/totalBoneDry;
									weight = totalBoneDry*per/100;
									if(isNaN(weight)) {
										weight = 0;
									}
									if(weight == Infinity) {
										weight = 0;
									}
									if(per == Infinity) {
											per = 0;
									}
									if(isNaN(per)) {
										per = 0;
									}
									weight=roundFunction(weight,roundDigit);
									totalWeight = totalWeight - weight;
									if(weight >= 0) {
										tableData[i].TARGET_VALUE_WEIGHT = weight;
									}
									if(per >= 0) {
											tableData[i].VALUE_PERCENTAGE=roundFunction(per,2);
									}		
								}
							}
							table.replaceData(tableData);

							document.getElementById("mainMaterialBoneDryInput").value = Number(sv_mainMtrlBoneDry).toFixed(2);
							document.getElementById("mainMaterialPerInput").value = Number(totalper).toFixed(2);
							
							document.getElementById("totalQuanityInput").value = newTotalWeight = Number(totalWeight).toFixed(2);
							message.messageEmitterName = 'CALCULATED_VALUE_WITHOUT_RECIPE_ERROR_MESSAGE';
							message.Message = {"mainMaterialBoneDry" : sv_mainMtrlBoneDry, "SPWT" : 0, "GBT": 0, "PER": totalper, "totalWeight": totalWeight, "totalVolumn": 0, "filler": 0, "TDC": 0, "DC": 0, "errorMessage": ''};
							window.parent.postMessage(message, '*');
						}
					}
					
					function onTargetValueChange() {
						let tableData = table.getData();
						for(let i = 0; i < tableData.length; i++) {
							if(tableData[i].IN_VAL == 'A') {
								tableData[i].CALC_MINIMUM = tableData[i].INPUT_MINIMUM;
								tableData[i].CALC_MAXIMUM = tableData[i].INPUT_MAXIMUM;
							} else if(tableData[i].IN_VAL == 'R') {
								if(tableData[i].INPUT_MINIMUM != null && tableData[i].INPUT_MINIMUM != "") {
									tableData[i].CALC_MINIMUM = Number(tableData[i].VALUE_PERCENTAGE) - Number(tableData[i].INPUT_MINIMUM);
								}
								if(tableData[i].INPUT_MAXIMUM != null && tableData[i].INPUT_MAXIMUM != "") {
									tableData[i].CALC_MAXIMUM = Number(tableData[i].VALUE_PERCENTAGE) + Number(tableData[i].INPUT_MAXIMUM);
								}
							} else if(tableData[i].IN_VAL == 'P') {
								if(tableData[i].INPUT_MINIMUM != null && tableData[i].INPUT_MINIMUM != "") {
									var per = (Number(tableData[i].VALUE_PERCENTAGE) * Number(tableData[i].INPUT_MINIMUM)) / 100;
									tableData[i].CALC_MINIMUM = Number(tableData[i].VALUE_PERCENTAGE) - Number(per);
								}
								if(tableData[i].INPUT_MAXIMUM != null && tableData[i].INPUT_MAXIMUM != "") {
									var per1 = (Number(tableData[i].VALUE_PERCENTAGE) * Number(tableData[i].INPUT_MAXIMUM)) / 100;
									tableData[i].CALC_MAXIMUM = Number(tableData[i].VALUE_PERCENTAGE) + Number(per1);
								}
							}							
						}
						if(tableData.length > 0) {
							table.replaceData(tableData);
						}						
					}
					
					function onMainMaterialBoneDryChange() {
						mainMaterialBoneDry = document.getElementById("mainMaterialBoneDryInput").value;
						if(mainMaterialBoneDry == '' ) {
							mainMaterialBoneDry = 0;
						}
						onValueChange();
					}
					function onTotalWeightChange() {
						mainMaterialBoneDry = document.getElementById("mainMaterialBoneDryInput").value;
						let sv_mainMtrlBoneDry = roundFunction(mainMaterialBoneDry, 1);
						oldTotalWeight = newTotalWeight;
						newTotalWeight = document.getElementById("totalQuanityInput").value;
						if(oldTotalWeight == '') {
							oldTotalWeight = 0;
						}
						if(newTotalWeight == '') {
							newTotalWeight = 0;
						}
						let perChange=0;
						if(oldTotalWeight>0){
							perChange=(newTotalWeight-oldTotalWeight)*100/(oldTotalWeight);
						}
						if(oldTotalWeight > newTotalWeight){
							perChange=(oldTotalWeight - newTotalWeight)*100/oldTotalWeight;
							sv_mainMtrlBoneDry=sv_mainMtrlBoneDry - (sv_mainMtrlBoneDry*perChange/100);
						}else{
							sv_mainMtrlBoneDry=sv_mainMtrlBoneDry + (sv_mainMtrlBoneDry*perChange/100);
						}
						mainMaterialBoneDry=sv_mainMtrlBoneDry;
						
						console.log('this method called');
						onValueChange();
					};
					function postData(oprType) {
								 return fetch(baseURL + "/recipe/get-recipe-itemtype-fct", {
										method: 'POST',
										headers:  {'Authorization': getCookie("tokensso") },
										body: JSON.stringify({ "recipeClass": recipeClass, "oPRType": oprType}),
								})
								.then(response => {
										return response.json();
								});
						};
					async function initTranslation(callback) {
						var host =  window.parent.location.host
						var browserLang = navigator.language						
						let langResponse; let langData;
						try {
							langResponse = await fetch("https://" + host + "/locales/" + browserLang + ".json");
						} catch (error) {							
							console.log('There was an error', error);							
						}						
						if (langResponse?.ok) {
  						langData = await langResponse.json();
						} else {
							langResponse = await fetch("https://" + host + "/locales/en.json");
							langData = await langResponse.json();
						}	
						var resObj = {}
						resObj[browserLang] = {
							translation:langData
						}
						i18next.init({
							fallbackLng: "en",
							lng: navigator.language,
							debug: true,
							resources: resObj
					 });
						// Make two asynchronous POST requests
						const promise1RecipeItemType = postData(2);
						const promise2RecipeFCT = postData(1);
					// Use Promise.all to wait for both promises to complete
					Promise.all([promise1RecipeItemType, promise2RecipeFCT])
							.then(responseArray => {
									// responseArray contains the results of both POST requests
									recipeItemType = responseArray[0];
									recipeFCTOption = responseArray[1];
									updatei18nextText();
									callback();
									// Continue with any further processing...
							})
							.catch(error => {
									console.error('Error:', error.message);
							});
					};
					function updatei18nextText() {
						document.getElementById('mainMaterialsBoneDryLabel').innerText = i18next.t("Main Materials Bone Dry");
						document.getElementById('mainMaterialInLabel').innerText = i18next.t("Main Material In %");
						document.getElementById('lblcolumnvisibility').innerText = i18next.t("Column Visibility");
						document.getElementById('lblbdry').innerText = i18next.t("%BDRY");
						document.getElementById('lblweight').innerText = i18next.t("WEIGHT");

						document.getElementById('checkButton').innerText = i18next.t("Check");
						document.getElementById('newButton').innerText = i18next.t("New");
						document.getElementById('loadingId').innerText = i18next.t("Loading...");

						document.getElementById('calculationDiv').removeAttribute("hidden");
						document.getElementById('buttonDiv').removeAttribute("hidden");
						document.getElementById('columnVisibilityDiv').removeAttribute("hidden");
					};
					function updateSearchViewButtonText() {
						var searchButtons = document.getElementsByClassName('searchButton');						
						Array.prototype.forEach.call(searchButtons, function(btn) {
    					btn.innerText = i18next.t("Search");
						});

						var viewBottons = document.getElementsByClassName('viewButton');
						Array.prototype.forEach.call(viewBottons, function(btn) {
    					btn.innerText = i18next.t("View");
						});
					};
          function chkBdryClick() {
					  const chk = document.getElementById("chkbdry");
							if(chk.checked) {
									table.showColumn('VALUE_PERCENTAGE');
							 }else {
									table.hideColumn('VALUE_PERCENTAGE');
							 }
					};
					function checkedCheckBoxconfig() {
					 if(columnConfiguration.includes('%BDRY')) {
								document.querySelector("#chkbdry").checked = true
							}
							if(columnConfiguration.includes('WEIGHT')) {
								document.querySelector("#chkweight").checked = true
							}

					};
					function chkWeightClick() {
					  const chk = document.getElementById("chkweight");
							if(chk.checked) {
									table.showColumn('TARGET_VALUE_WEIGHT');
							 }else {
									table.hideColumn('TARGET_VALUE_WEIGHT');
							 }
					};

					window.addEventListener("message", (event) => {				
					$('#recipeButton').prop('disabled', false);
						if(event.data.message == "CREATE") {
							let message = event.data.data;
							baseURL = message.BASEURL;
							resourceSelect = message.RESOURCE_SELECT;
							targetDryContent = message.TARGET_DRY_CONTENT;
							mainMaterialBoneDry = message.MAIN_MATERIAL_BONE_DRY;
							weightUnit = message.WEIGHT_UNIT;
							totalWeight = message.totalWeight;
							recipeClass = message.RECIPE_CLASS;
							//columnConfiguration = message.COLUMN_CONFIG;
							//checkedCheckBoxconfig(columnConfiguration);
							getColumnConfiguration(message.RECIPE_TYPE);
							if(mainMaterialBoneDry == '') {
								mainMaterialBoneDry = 0;
							}
							document.getElementById("mainMaterialBoneDryInput").value = Number(mainMaterialBoneDry).toFixed(2);
							document.getElementById('weightUnit').innerText = weightUnit;
							document.getElementById("totalQuanityInput").value = newTotalWeight = Number(totalWeight).toFixed(2);
							//document.getElementById("mainMaterialPerInput").value = message.PER;							
							apiURL = undefined;
							initTranslation(setupTabulator);
						}
						else if(event.data.message == "EDIT") {
							let message = event.data.data;
							resourceSelect = message.RESOURCE_SELECT;
							targetDryContent = message.TARGET_DRY_CONTENT;
							mainMaterialBoneDry = message.MAIN_MATERIAL_BONE_DRY;
							weightUnit = message.WEIGHT_UNIT;
							totalWeight = message.totalWeight;
							baseURL = message.BASEURL;
							recipeClass = message.RECIPE_CLASS;
							interMediateMaterial = message.INTER_MEDIATE_MATERIAL_CODE;
							//columnConfiguration = message.COLUMN_CONFIG;
							//checkedCheckBoxconfig(columnConfiguration);
							getColumnConfiguration(message.RECIPE_TYPE);
							apiURL = baseURL + "/recipeitem/getfiltered"
							apiBody = {RECIPE_NUMBER: message.RECIPE_NUMBER , RECIPE_SET_NUMBER: message.RECIPE_SET_NUMBER, MACHINE_GROUP: message.MACHINE_GROUP, RECIPE_CLASS: message.RECIPE_CLASS};
							if(mainMaterialBoneDry == '') {
								mainMaterialBoneDry = 0;
							}
							document.getElementById("mainMaterialBoneDryInput").value = Number(mainMaterialBoneDry).toFixed(2);
							document.getElementById('weightUnit').innerText = weightUnit;
							document.getElementById("mainMaterialPerInput").value = Number(message.PER).toFixed(2);
							document.getElementById("totalQuanityInput").value =newTotalWeight= Number(totalWeight).toFixed(2);
							initTranslation(setupTabulator);
						}
						else if(event.data.message == "CLOSE_LOADER") {
							document.getElementsByClassName("loader")[0].style.display = "none";
						}
						else if(event.data.message == "Refresh") {
							initTranslation(setupTabulator);
						}
						else if(event.data.message == "onSelectMaterialData") {
								//table.replaceData(event.data.data);
							let message = event.data.data;
							resourceSelect = message.RESOURCE_SELECT;
							targetDryContent = message.TARGET_DRY_CONTENT;
							mainMaterialBoneDry = message.MAIN_MATERIAL_BONE_DRY;
							if(mainMaterialBoneDry == '') {
								mainMaterialBoneDry = 0;
							}
							baseURL = message.BASEURL;
							table.replaceData(message.tableData);
						}else if(event.data.message == "onMainMaterialBoneDryChange") {							
							mainMaterialBoneDry = event.data.data;
							if(mainMaterialBoneDry == '') {
								mainMaterialBoneDry = 0;
							}
							onValueChange();
						}else if(event.data.message == "onTotalWeightChange") {							
							let message = event.data.data;
							oldTotalWeight = message.oldTotalWeight;
							newTotalWeight = message.newTotalWeight;
							if(oldTotalWeight==''){
								oldTotalWeight=0;
							}
							if(newTotalWeight==''){
								newTotalWeight=0;
							}
							onTotalWeightChange();
						} 
						else if (event.data.message == "IntermediateMaterialOnRowSelected") {
								interMediateMaterial = event.data.data.INTER_MEDIATE_MATERIAL_CODE;
						}
					});
				</script>
			</body>
		</html>
	`
}