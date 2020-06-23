_satellite.pushAsyncScript(function(event, target, $variables){
  if (typeof jQuery != 'undefined' && typeof jQuery === "function" && jQuery.fn.on) {
    //slide 7-12
    var variableOverrides = {},
        page_name,
        linkName,
        cta_value,
        my_blockEvent = false,
        icon_cloud = true,
        data_set,
        content_free,
        author_name,
        file_id,
        content_type,
        content_download_type,
        content_category,
        content_title,
        License_type,
        similar_Click = false,
        href = window.location.href.toLowerCase(),
        pathname = window.location.pathname.toLowerCase(),
        hostname = window.location.hostname.toLowerCase();

    function dg_map() {
        dl = window.digitalData;
        //evar
        if (typeof dl.pageInfo !== 'undefined') {
            s_adbadobestock.eVar2 = dl.pageInfo.content_type; //Image Type
            s_adbadobestock.eVar15 = dl.pageInfo.content_id; //Content ID
            s_adbadobestock.eVar25 = dl.pageInfo.load_type;
            s_adbadobestock.eVar207 = dl.pageInfo.load_type;
            s_adbadobestock.eVar89 = dl.pageInfo.author; //product author
            s_adbadobestock.eVar134 = dl.pageInfo.editorial;
            s_adbadobestock.eVar226 = dl.pageInfo.tab;
            s_adbadobestock.eVar227 = dl.pageInfo.tab_display;
            s_adbadobestock.eVar228 = dl.pageInfo.file_type;
            s_adbadobestock.eVar225 = dl.pageInfo.sub_category;
            s_adbadobestock.eVar235 = dl.pageInfo.core_type
            s_adbadobestock.eVar237 = dl.pageInfo.search_theme;
            s_adbadobestock.eVar242 = dl.pageInfo.premium_level;
            //prop
            s_adbadobestock.eVar167 = s_adbadobestock.prop67 = dl.pageInfo.selected_tab;
            s_adbadobestock.prop69 = dl.pageInfo.title;
            if (typeof dl.pageInfo.category !== 'undefined' && dl.pageInfo.category.length > 0)
                s_adbadobestock.eVar11 = dl.pageInfo.category.id + "|" + dl.pageInfo.category.name; // Category
        }
        s_adbadobestock.eVar125 = "icon";
        s_adbadobestock.eVar146 = "";
        if (typeof dl.product !== 'undefined') {
            s_adbadobestock.eVar1 = dl.product.finding_method; //product finding method
            s_adbadobestock.eVar87 = dl.product.selection_method; //product selection method
            s_adbadobestock.eVar206 = dl.product.row_position + "|" + dl.product.column_position;
            if (typeof dl.product.openin !== 'undefined' && dl.product.openin) {
                s_adbadobestock.eVar146 = dl.product.openin;
                s_adbadobestock.eVar125 = "open in " + dl.product.openin;
            }
        }
        if (typeof dl.user !== 'undefined') {
            s_adbadobestock.eVar201 = s_adbadobestock.prop59 = dl.user.region;
            s_adbadobestock.eVar208 = s_adbadobestock.prop56 = dl.user.date_stamp;
            s_adbadobestock.eVar46 = dl.user.stockactivestatus;
            s_adbadobestock.eVar111 = dl.user.cc_member_status;
            s_adbadobestock.eVar200 = s_adbadobestock.prop30 = dl.user.team;
            s_adbadobestock.eVar238 = dl.user.remaining_credit;
            s_adbadobestock.eVar244 = dl.user.downloadtotal;
            s_adbadobestock.eVar248 = dl.user.remaining_quota;
            s_adbadobestock.eVar250 = String(dl.user.member_status);
        }
        if (typeof dl.transaction !== 'undefined') {
            s_adbadobestock.eVar238 = dl.transaction.allotment_used;
        }
        s_adbadobestock.linkTrackVars = "prop3,prop10,prop25,prop30,prop52,prop56,prop59,prop62,prop67,prop69,eVar1,eVar2,evar11,eVar12,eVar14,eVar15,eVar22,eVar25,eVar28,eVar35,eVar41,eVar46,eVar51,eVar87,eVar89,eVar91,eVar111,eVar125,eVar134,eVar146,eVar167,eVar200,eVar201,eVar206,eVar207,eVar208,eVar211,eVar225,eVar226,eVar227,eVar228,eVar235,eVar237,eVar238,eVar242,eVar244,eVar248,eVar250,eVar238,events"
    }

    function data_set_values(file_id) {
        requirejs('lib/assetsStore').getAsset(file_id).then(function (data) {
            data_set = data;
            author_name = data_set.author;
            content_type = data_set.content_type;
            content_category = data_set.category_hierarchy;
            content_free = data_set.is_free;
            content_title = data_set.title;
            content_type = content_type.substr(0, content_type.lastIndexOf("/"));
            if (content_type === "application") {
                content_type = "illustrator";
            }
            if (data_set.is_3D) content_type = "3D";
            if (data_set.is_template) content_type = "Template";
            if (data_set.comp_file_path.indexOf("Watermarked") != -1) content_download_type = "watermarked";
            else content_download_type = "full resolution";
        });

    }

    function data_set_values_dl() {
        dl = window.digitalData;
        //evar
        if (typeof dl.pageInfo !== 'undefined') {
            author_name = dl.pageInfo.author;
            content_type = dl.pageInfo.content_type;
            if (typeof dl.pageInfo.category !== 'undefined' && dl.pageInfo.category.length > 0)
            content_category = dl.pageInfo.category.id + "|" + dl.pageInfo.category.name;;
//            content_free = data_set.is_free;
            content_title = dl.pageInfo.title;
            if (content_type === "application") {
                content_type = "illustrator";
            }
//            if (data_set.comp_file_path.indexOf("Watermarked") != -1) content_download_type = "watermarked";
//            else content_download_type = "full resolution";
        }
    }


    if (href.indexOf("/premium") > -1 || href.indexOf("/collections") > -1) {
        cta_value = "collection";
    }
    if (href.indexOf("/search") > -1) {
        cta_value = "search";
    }
    if (href.indexOf("/contributor") > -1) {
        cta_value = "contributor";
    }
    if (_satellite.getQueryParam("as_channel") || _satellite.getQueryParam("x-product") || _satellite.getQueryParam("ssocc") || _satellite.getQueryParam("sso_inbound")) {
        cta_value = "adobe apps";
    }
    if (pathname.indexOf("/library/") > -1) {
        cta_value = "library";
    }
    if (pathname.indexOf("/category/") > -1) {
        cta_value = "category";
    }
    if (pathname.indexOf("/stock-photo/") > -1) {
        cta_value = "image detail";
    }
    //Hover click
    jQuery(".all-content-wrapper").on("mousedown", ".js-loggedout-preview-expansion,.js-hover-loggedout-preview,.js-hover-icon-downloading,.js-hover-loggedout-licensing,.js-loggedout-licensing-expansion,.js-hover-icon-licensing,.js-hover-loggedout-similar,.js-loggedout-similar-expansion [class='nav__item js-fsc-option-btn'],.js-hover-save-to-lib,.js-new-library,.js-hover-save-to-lib .icon-device, .js-hover-expand-btn, .js-loggedout-delete-expansion, .js-fsc-tile-container label", function () {
        file_id = jQuery(this).parents(".search-result-cell").attr("data-content-id");
        var my_lib = jQuery(this).text().trim();
        var download_type = jQuery(this).parents(".search-result-cell").attr("data-comp-url");
        var data_action = jQuery(this).attr("data-app-action");
        var data_app_action = jQuery(this).parents('.padding-top-xsmall').find('a.js-hover-save-to-lib').attr('data-app-action');
        var det_img = jQuery(this).parents("#details-wrapper").hasClass("details-wrapper");
        if (typeof file_id !== "undefined" && file_id) {
            data_set_values(file_id);
        }
        if (digitalData && digitalData.search && !content_type) {
            content_type = digitalData.search.selected_tab;
        }
        s_adbadobestock.eVar15 = file_id; //Content ID
        s_adbadobestock.eVar89 = author_name; //author name
        s_adbadobestock.eVar11 = content_category; // Category
        s_adbadobestock.eVar1 = cta_value; //product finding method
        s_adbadobestock.eVar87 = "hover"; //product selection method
        s_adbadobestock.eVar2 = content_type; //Image Type
        s_adbadobestock.eVar25 = content_download_type;
        s_adbadobestock.prop69 = content_title;
        s_adbadobestock.eVar125 = "icon";
        if (my_lib) {
            if (my_lib == "+") s_adbadobestock.eVar125 = "new library";
            if (jQuery(this).hasClass("icon-device")) s_adbadobestock.eVar125 = "device download";
            if (jQuery(this).attr("data-lib-name")) {
                s_adbadobestock.eVar125 = "existing library";
            }
            if (jQuery(this).attr("data-lib-name") == "Computer") {
                s_adbadobestock.eVar125 = "device download";
            }
            my_blockEvent = false;
        }
        if (data_action) {
            data_action = data_action.split("OpenIn")[1];
            s_adbadobestock.eVar125 = "open in " + data_action;
            my_blockEvent = true;
        }
        if (s_adbadobestock.eVar125 == "icon") {
            my_blockEvent = true;
        }
        if (content_type == "3D") {
            var dparenz = $(this).parents(".search-result-cell").children()[1];
            d_text = $(dparenz).children().children().children().children().children().children()[0];
            d_text_val = $(d_text).text();
            s_adbadobestock.eVar211 = d_text_val;

        }
        var temp_preview = jQuery(this).closest(".js-expansion ");
        var temp_preclass = $(temp_preview).attr('data-action');
        if (jQuery(this).children().length && jQuery(this).children().hasClass("icon-cloud-sync")) {
            icon_cloud = false;
        }
        if (jQuery(this).hasClass("js-hover-save-to-lib")) {
            icon_cloud = true;
        }
        //preview click
        /*if (icon_cloud && (temp_preclass == "Preview" || jQuery(this).closest(".js-preview-expansion").length || jQuery(this).closest(".js-downloads-expansion").length || jQuery(this).hasClass("js-hover-loggedout-preview") || jQuery(this).hasClass("js-hover-icon-downloading") || jQuery(this).hasClass("js-hover-loggedout-modal-presenter"))) {
          s_adbadobestock.eVar91 = cta_value + ":" + "hover" + ":" + "save preview"; //CTA tracker
          if (content_type == "3D" || (content_type == "Template" && $(this).attr("data-action") == "Preview")) {
            s_adbadobestock.eVar91 = cta_value + ":" + "hover" + ":" + "view preview";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event151";
          } else {
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event151";
          }
          if (content_type == "Template" && $(this).attr("data-action") != "Preview") return;
          if (content_type == "3D" && $(this).attr("data-action") != "Preview") return;
          if (my_blockEvent && (data_action || data_app_action)) {
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event146";
          }
          //SL.getVar("adbadobestock_datalayerMaping");
          s_adbadobestock.linkTrackVars = "prop69,prop10,eVar12,eVar14,eVar211,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,events";
          s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "previewClick");
          if (content_type == "3D" || content_type == "Template") {
            s_adbadobestock.events = "event103";
            s_adbadobestock.t({
              pageName: s_adbadobestock.prop3 + ":searchResults:preview"
            });
          }

        }*/
        //end of preview click

        //license click
        /*
        if (jQuery(this).closest(".js-libraries-expansion").length || jQuery(this).hasClass("js-hover-loggedout-licensing") || jQuery(this).hasClass("js-hover-icon-licensing") || jQuery(this).hasClass("js-loggedout-licensing-expansion")) {
          s_adbadobestock.eVar91 = cta_value + ":" + "hover" + ":" + "license";
          s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event152";
          if (my_blockEvent && (data_action || data_app_action)) {
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event146";
          }
          if (jQuery('.header-menu span.quota').length && jQuery('.header-menu span.quota').text() !== "0") {
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event145";
          } else {
            if (typeof digitalData !== "undefined" && typeof digitalData.user !== "undefined" && typeof digitalData.user.remaining_quota !== "undefined" && digitalData.user.remaining_quota > 0) {
              s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event145";
            }
          }
          if (content_free && content_type == "Template") {
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event158";
          }

          s_adbadobestock.linkTrackVars = "prop69,prop10,eVar12,eVar14,prop25,eVar22,eVar211,eVar28,eVar25,eVar35,eVar41,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,events";
          s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "licenseClick");

        }*/
        //end of license click


        if (jQuery(this).closest(".js-loggedout-similar-expansion").length || jQuery(this).hasClass("js-hover-loggedout-similar") || jQuery(this).hasClass("js-loggedout-similar-expansion") || jQuery(this).hasClass("nav__item js-fsc-option-btn") || jQuery(this).is("[data-t^='fsc-options']")) {
          var fs_option = jQuery(this).text().trim();
          if(fs_option == ""){
            fs_option = "find similar";
          }
          setTimeout(function(){
            if(typeof window.digitalData !== "undefined" && window.digitalData.pageInfo !== "undefined" && window.digitalData.pageInfo.selection_method !== "undefined" )
            {
                s_adbadobestock.eVar91 = window.digitalData.pageInfo.finding_method + ":" + window.digitalData.pageInfo.selection_method + ":" + "find similar" + ":" + fs_option;
                s_adbadobestock.eVar87 = window.digitalData.pageInfo.selection_method;
            }
            else
            {
                s_adbadobestock.eVar91 = cta_value + ":" + "hover" + ":" + "similar";
            }
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
            s_adbadobestock.linkTrackVars = "prop52,prop69,prop10,eVar12,eVar14,prop25,eVar22,eVar211,eVar28,eVar25,eVar35,eVar41,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "similarClick");
          }, 250);
        }

        if (jQuery(this).hasClass("js-loggedout-delete-expansion") || jQuery(this).hasClass("js-hover-lib-delete-btn active")) {
            s_adbadobestock.eVar91 = cta_value + ":" + "hover" + ":" + "delete";
            s_adbadobestock.linkTrackVars = "prop52,prop69,prop10,eVar12,eVar14,prop25,eVar22,eVar211,eVar28,eVar25,eVar35,eVar41,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "deleteClick");
        }

        _satellite._poll(function () {
            s_adbadobestock.eVar87 = "hover";
            s_adbadobestock.t({
                pageName: s_adbadobestock.prop3 + ":qc:outoflicensemodal"
            });

        }, [function () {
            if ((parseInt(jQuery("#memberLicensesCounter .quota").text()) == 0) && (jQuery(".modal").length)) {
                return true;
            }
        }], {
            timeout: 5000,
            interval: 200
        })

    });

    //thumb frame click
    jQuery(".all-content-wrapper").on("click", ".thumb-frame", function () {
        if (content_type == "3D") {
            var dparenz = $(this).parents(".search-result-cell").children()[1];
            d_text = $(dparenz).children().children().children().children().children().children()[0];
            d_text_val = $(d_text).text();
            s_adbadobestock.eVar211 = d_text_val;
        }
    })



    //Detaliled view click  
    jQuery("div.view-container").on("click", ".js-switch-save-preview button,.js-switch-view-preview button,.js-switch-save-license-image button,a[href*='/search?filters'],.js-detail-save-to-new-lib, a.js-detail-save-to-new-lib,a.js-detail-save-to-lib,.js-detail-save-to-lib button,.js-detail-save-to-lib,.js-find-similar", function () {
        file_id = jQuery(this).parents('#details').attr("data-content_id");
        var download_type = jQuery(this).parents(".search-result-cell").attr("data-comp-url");
        var det_img = jQuery(this).parents("#details-wrapper").hasClass("details-wrapper");
        var img_details_License_type = jQuery("div.view-container").find("label[data-active='true']").attr("data-tab");
        if (img_details_License_type === "#content-0") {
            var img_details_License = "Standard";
        } else img_details_License = "Extended";
        if (typeof file_id !== "undefined" && file_id) {
            data_set_values(file_id);
        }
        if (digitalData && digitalData.search && !content_type) {
            content_type = digitalData.search.selected_tab;
        }
        s_adbadobestock.eVar15 = file_id; //Content ID
        s_adbadobestock.eVar89 = author_name; // Author
        s_adbadobestock.eVar11 = content_category; // Category
        s_adbadobestock.eVar1 = cta_value; //product finding method  
        s_adbadobestock.eVar87 = "image detail"; //product selection method 
        s_adbadobestock.eVar2 = content_type; //Image Type 
        s_adbadobestock.eVar35 = img_details_License; //License Type & Premium Content 
        s_adbadobestock.eVar25 = content_download_type;
        s_adbadobestock.prop69 = content_title;

        var my_lib = jQuery(this).text().trim();
        var data_action = jQuery(this).attr("data-app-action");
        var data_app_action = jQuery(this).parents('.detail-button-group').find('a.js-lib-selector-dropdown:visible').attr('data-app-action');
        s_adbadobestock.eVar125 = "icon";
        if (my_lib) {
            if (my_lib == "+") s_adbadobestock.eVar125 = "new library";
            if (jQuery(this).hasClass("icon-device")) s_adbadobestock.eVar125 = "device download";
            if (jQuery(this).attr("data-lib-name")) {
                s_adbadobestock.eVar125 = "existing library";
            }
            if (jQuery(this).attr("data-lib-name") == "Computer") {
                s_adbadobestock.eVar125 = "device download";
            }
            my_blockEvent = false;
        }
        if (data_action) {
            data_action = data_action.split("OpenIn")[1];
            s_adbadobestock.eVar125 = "open in " + data_action;
            my_blockEvent = true;
        }

        if (jQuery(this).hasClass("js-detail-default-lib-action")) {
            s_adbadobestock.eVar125 = "icon";
            my_blockEvent = true;
        }
        if (!jQuery(this).hasClass("js-action-overage") && !jQuery(this).hasClass("js-overage-modal-cancel")) {
            //license click
            /*
            if (jQuery(this).hasClass("js-switch-save-license-image") || jQuery(this).closest(".js-switch-save-license-image").length || jQuery(this).closest(".js-switch-license-openin-image").length) {

              s_adbadobestock.eVar91 = cta_value + ":" + "image detail" + ":" + "license"; //CTA tracker 
              s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event152";
              if (my_blockEvent && (data_action || data_app_action)) {
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event146";
              }
              if (jQuery('.header-menu span.quota').length && jQuery('.header-menu span.quota').text() !== "0") {
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event145";
              } else {
                if (typeof digitalData !== "undefined" && typeof digitalData.user !== "undefined" && typeof digitalData.user.remaining_quota !== "undefined" && digitalData.user.remaining_quota > 0) {
                  s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event145";
                }
              }
              if (content_free && content_type == "Template") {
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event158";
              }

              s_adbadobestock.linkTrackVars = "prop69,prop10,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,events";
              s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "licenseClick");
            }
            */
            //end of license click  

            var preview = jQuery(this).parent().parent();
            var prev_window = $(preview).hasClass("js-switch-view-preview");
            /* if (prev_window || jQuery(this).hasClass("js-switch-save-preview") || jQuery(this).closest(".js-switch-save-preview").length || jQuery(this).closest(".js-switch-save-image").length || jQuery(this).closest(".js-switch-open-preview").length || jQuery(this).closest(".js-switch-openin-image").length) {
               s_adbadobestock.eVar91 = cta_value + ":" + "image detail" + ":" + "save preview";
               if (content_type == "3D" || content_type == "Template") {
                 s_adbadobestock.eVar91 = cta_value + ":" + "image detail" + ":" + "view preview";
                 s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event151";
               } else {
                 s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event151";
               }

               if (my_blockEvent && (data_action || data_app_action)) {
                 s_adbadobestock.linkTrackEvents = s_adbadobestock.events += ",event146";
               }

               s_adbadobestock.linkTrackVars = "prop69,prop10,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,events";
               s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "previewClick");
               if (content_type == "3D" || content_type == "Template") {
                 s_adbadobestock.events = "event103";
                 s_adbadobestock.eVar1 = "";
                 s_adbadobestock.eVar87 = "";
                 s_adbadobestock.eVar89 = "";
                 s_adbadobestock.eVar91 = "";
                 s_adbadobestock.eVar125 = "";
                 s_adbadobestock.t({
                   pageName: s_adbadobestock.prop3 + ":searchResults:preview"
                 });
               }
             }*/
            if (jQuery(this).hasClass("js-find-similar")) {

                s_adbadobestock.eVar91 = cta_value + ":" + "image detail" + ":" + "find similar";
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
                s_adbadobestock.linkTrackVars = "prop52,prop69,prop10,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,events";
                s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "similarClick");
            }
        }

        _satellite._poll(function () {
            s_adbadobestock.pageName = s_adbadobestock.prop3 + ":qc:outoflicensemodal";
            s_adbadobestock.eVar87 = "image detail";
            s_adbadobestock.t();
        }, [function () {
            if ((parseInt(jQuery("#memberLicensesCounter .quota").text()) == 0) && (jQuery(".modal").length)) {
                return true;
            }
        }], {
            timeout: 5000,
            interval: 200
        })
    });

    //license tab click
    /* jQuery(".all-content-wrapper").on("click", ".js-details-tab", function () {

       setTimeout(function () {
         if (typeof digitalData !== 'undefined' && typeof digitalData.pageInfo !== 'undefined') {
           s_adbadobestock.eVar226 = digitalData.pageInfo.tab;
           s_adbadobestock.eVar227 = digitalData.pageInfo.tab_display;
           s_adbadobestock.eVar91 = cta_value + ":license:tab";
           s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
           s_adbadobestock.linkTrackVars = "events,prop10,eVar12,eVar46,prop61,eVar119,eVar14,prop25,eVar91,eVar22,eVar41,prop52,eVar111,prop62,eVar28,eVar226,eVar227";
           s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + cta_value + ":license:tabClick");
         }
       }, 200);

     })*/

    //slide 29-30
    jQuery(".all-content-wrapper").on("click", "#js-options-button", function () {
        var option_filter = jQuery(".js-options-panel").css("display");
        if (option_filter == "none") {
            s_adbadobestock.eVar91 = cta_value + ":filter:refine";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event153";
            s_adbadobestock.linkTrackVars = "events,prop10,prop52,eVar12,eVar46,prop61,eVar119,eVar14,prop25,eVar91,eVar22,eVar41,prop52,eVar111,prop62,eVar28";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + cta_value + ":filter:refineClick");
        }

    })

    //slide 31-32

    jQuery(".all-content-wrapper").on("click", ".js-options-panel .css-filter-button button", function () {
        var option_filter_update = jQuery(this).attr("type");
        if (option_filter_update == "submit") {

            s_adbadobestock.eVar91 = cta_value + ":filter:update";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event154";
            s_adbadobestock.linkTrackVars = "events,prop52,prop10,eVar12,eVar46,eVar119,prop61,eVar14,prop25,eVar91,eVar22,eVar41,prop52,eVar111,prop62,eVar28";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + cta_value + ":filter:updateClick");
        }
    })

    jQuery("form").on("click", ".js-search-text-input", function () {
        s_adbadobestock.linkTrackVars = "prop52,eVar32,prop3,prop4,prop5,prop10,eVar12,eVar14,prop12,eVar16,prop13,prop25,eVar22,eVar28,eVar41,prop52,eVar111,events";
        s_adbadobestock.linkTrackEvents = "event58";
        s_adbadobestock.events = "event58";
        s_adbadobestock.tl(this, 'o', '' + s_adbadobestock.prop3 + ':serachintentClick')
    });

    var corp_preview = function () {

        //preview corp start
        $(document).on("click", "#preview-crop", function () {
            var preview_corp = this.getAttribute("data-is-selected");
            dg_map();
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
            if (preview_corp === "true") {
                s_adbadobestock.eVar91 = "search:image detail:preview crop";
                s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "search:image detail:preview crop");
            } else {
                s_adbadobestock.eVar91 = "search:image detail:hide crop";
                s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "search:image detail:hide crop");
            }
        });

        //aspect ratio
        $(document).on("click", "#preview-crop-panel #aspect-ratio-panel", function () {
            dg_map();
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
            s_adbadobestock.eVar91 = "search:image detail:preview crop aspect ratio";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "search:image detail:preview crop aspect ratio");
        });

        //scale
        $(document).on("click", "#preview-crop-panel .cr-slider-wrap", function () {
            dg_map();
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
            s_adbadobestock.eVar91 = "search:image detail:preview crop scale";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "search:image detail:preview crop scale");
        });

    }

    corp_preview();

    jQuery("div.view-container").on("click", ".thumb-frame a, a.js-img-similar", function () {
      setTimeout(function(){ 
        similar_Click = false;
        if (jQuery(this).hasClass("js-img-similar")) {
            similar_Click = true;
        }
        _satellite._poll(function () {

            // corp_preview();

            if (window.performance && window.performance.timing) {
                s_adbadobestock.eVar65 = s_adbadobestock.getLoadTime("browserapi", "event61", "event62");
            } else {
                s_adbadobestock.eVar65 = s_adbadobestock.getLoadTime("header", "event61", "event62");
            }
            if (similar_Click) {
                s_adbadobestock.events = "event98,event61,event62";
            } else {
                s_adbadobestock.events = "event3,event61,event62";
            }
            file_id = jQuery('span.badge a').text() ? $('span.badge a').text() : '';
            if (typeof digitalData !== "undefined" && digitalData) {
                dg_map();
                data_set_values_dl();
            }

            s_adbadobestock.eVar2 = content_type;
            s_adbadobestock.eVar11 = content_category; // Category
            s_adbadobestock.eVar25 = content_download_type;
            s_adbadobestock.eVar15 = digitalData.pageInfo.content_id;
            s_adbadobestock.eVar89 = author_name;
            s_adbadobestock.prop69 = content_title;
            if (typeof digitalData !== "undefined" && typeof digitalData.pageInfo !== "undefined") {
                s_adbadobestock.eVar242 = digitalData.pageInfo.premium_level;
                s_adbadobestock.eVar134 = digitalData.pageInfo.editorial + "|" + digitalData.pageInfo.search_theme;
            }
            // SL.getVar("adbadobestock_datalayerMaping");
            if (href.indexOf("library") > -1) {
                page_name = s_adbadobestock.prop3 + ":library:imageDetail";
            } else {
                page_name = s_adbadobestock.prop3 + ":searchresults:searchimageClick";

            }
            s_adbadobestock.eVar126 = '';
            s_adbadobestock.t({
                pageName: page_name
            });

            s_adbadobestock.eVar134 = "";
        }, [function () {
            if (jQuery("#details-wrapper").hasClass("open") && typeof window.digitalData !== "undefined" && typeof window.digitalData.eventInfo !== "undefined" && window.digitalData.eventInfo.eventLabel && window.digitalData.eventInfo.eventLabel === 'detailPanel') {
                return true;
            }
        }], {
            timeout: 7000,
            interval: 200
        })

    }, 500);

    })

    jQuery("div.view-container").on("click", ".js-btn-buy-additional-license", function () {
        if (pathname.indexOf("licensehistory") != -1) {
            file_id = jQuery(this).attr("data-content-id");
            License_type = jQuery(this).attr("data-license-id");
            if (typeof file_id !== "undefined" && file_id) {
                data_set_values(file_id);
            }
            if (License_type == 1) {
                License_type = "Standard";
            } else License_type = "Extended";
            s_adbadobestock.eVar1 = "license";
            s_adbadobestock.eVar91 = "license:cta:license again";
            s_adbadobestock.eVar15 = file_id;
            s_adbadobestock.eVar125 = '';
            s_adbadobestock.eVar89 = author_name;
            s_adbadobestock.eVar35 = License_type;
            s_adbadobestock.eVar2 = content_type;
            s_adbadobestock.prop69 = content_title;
            s_adbadobestock.eVar11 = content_category; // Category
            s_adbadobestock.linkTrackVars = "prop52,prop69,eVar11,eVar1,eVar32,eVar2,prop3,prop4,prop5,prop8,eVar8,prop10,eVar14,prop12,eVar12,eVar15,eVar16,prop13,eVar19,prop25,eVar22,eVar27,eVar28,eVar35,eVar41,prop52,prop62,eVar79,eVar87,eVar89,eVar91,eVar111,eVar110,eVar111,prop62,eVar46,prop61,eVar119,events";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event17,event97";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":license:license again Click");
            s_adbadobestock.eVar91 = "";
            _satellite._poll(function () {
                s_adbadobestock.events = "event61,event62";
                s_adbadobestock.t({
                    pageName: s_adbadobestock.prop3 + ":member:licensehistory:buyoverlay"
                });
            }, [function () {
                if (jQuery(".modal-window-canvas").css("display") == "block") {
                    return true;
                }
            }], {
                timeout: 5000,
                interval: 200
            })

        }
    })

    jQuery("body").on("mouseup", "#modal-confirm-button", function () {
        s_adbadobestock.eVar15 = file_id;
        s_adbadobestock.eVar125 = '';
        s_adbadobestock.eVar89 = author_name;
        s_adbadobestock.eVar2 = content_type;
        s_adbadobestock.eVar35 = License_type;
        s_adbadobestock.eVar11 = content_category;
        s_adbadobestock.prop69 = content_title;
        s_adbadobestock.eVar91 = "license:overlay:ok";
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event17,event97";
        s_adbadobestock.linkTrackVars = "prop52,prop69,eVar11,eVar1,eVar32,eVar2,prop3,prop4,prop5,prop8,eVar8,prop10,eVar14,prop12,eVar12,eVar15,eVar16,prop13,eVar19,prop25,eVar22,eVar27,eVar28,eVar35,eVar41,prop52,prop62,eVar79,eVar87,eVar89,eVar91,eVar111,events";
        s_adbadobestock.eVar1 = "license";
        s_adbadobestock.eVar87 = "direct";
        s_adbadobestock.tl(this, 'o', '' + s_adbadobestock.prop3 + ':buyadditionallicenseClick');
    })

    jQuery("body").on("click", ".js-action-overage", function () {
        file_id = jQuery(this).parents(".search-result-cell").attr("data-content-id");
        if (typeof file_id !== "undefined" && file_id) {
            data_set_values(file_id);
        }
        if (pathname.indexOf("/license") > -1) {
            s_adbadobestock.eVar1 = "license";
        }
        if (pathname.indexOf("/search") > -1) {
            s_adbadobestock.eVar1 = "search";
        }
        s_adbadobestock.eVar125 = '';
        s_adbadobestock.eVar15 = file_id;
        s_adbadobestock.eVar89 = author_name;
        s_adbadobestock.eVar91 = "license:overlay:yes";
        s_adbadobestock.eVar2 = content_type;
        s_adbadobestock.prop69 = content_title;
        s_adbadobestock.eVar11 = content_category; // Category
        s_adbadobestock.eVar87 = "hover";
        s_adbadobestock.events = "event12,event27,event35";
        s_adbadobestock.t({
            pageName: s_adbadobestock.prop3 + ":payoverageClick"
        });
    })

    jQuery(".all-content-wrapper").on("click", "a[href*='/premium'],a[href*='/contributor/'],li.nav__item a[href*='/Category/']", function () {
        var meta_click;
        var nav_bar = $(this).hasClass("nav__link");
        var carousel = $(this).parents("[id='carousel-app']");
        if (!nav_bar && carousel.length == 0) {
            if (pathname !== "/search") {
                var click_element, click_loc;
                if (jQuery(this).attr("href").indexOf("/premium") !== -1) {
                    if (pathname.indexOf("/premium") !== -1) {
                        click_loc = "premium collection";
                        var collection_type = jQuery(this).parents('.container-large-max').find('h2.text-sregular').text();
                        meta_click = $(this).attr("title");
                        if (collection_type) {
                            click_element = collection_type;
                        } else {
                            click_element = "featured contributors";
                        }

                    } else {
                        click_loc = "homepage";
                        click_element = "collection";
                        meta_click = "premium"
                    }

                    if ($(this).hasClass("button")) {
                        click_element = "discover collection";
                        meta_click = "premium"
                    }
                }

                if (jQuery(this).attr("href").indexOf("/contributor") !== -1) {

                    click_loc = "homepage";
                    click_element = "artist";
                    meta_click = "contributor"

                }


                if (jQuery(this).attr("href").indexOf("/Category") !== -1) {
                    click_element = "category";
                    click_loc = "homepage";
                    var click_ = $(this).attr("href");
                    click_ = click_.split("/");
                    if (click_) click_ = click_[click_.length - 2]
                    meta_click = click_;
                }
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
                s_adbadobestock.eVar126 = click_loc + "|" + click_element + "|" + meta_click;
                s_adbadobestock.linkTrackVars = "prop52,prop69,prop3,prop10,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar126,events";
                s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + s_adbadobestock.eVar126 + " Click");
            }
        }
    })


    jQuery(".all-content-wrapper").on("click", ".with-gutter a,.bh-video-collection,a[data-t='preset-search-3D-materials-card-search-button-text'],a[data-t='preset-search-3D-lights-card-search-button-text'],a[data-t='preset-search-3D-models-card-search-button-text'],.js-homepage-category,a[data-t='get-started-photos-card-search-button'],a[data-t='get-started-vectors-card-search-button'],a[data-t='get-started-illustrations-card-search-button'],a[data-t='get-started-HD-card-search-button'],a[data-t='get-started-4K-card-search-button'],a[href*='/collections'],.js-landing-page-analytics-link", function () {



        if (pathname.indexOf("images") !== -1) {
            if ($(this).attr("data-t") == "get-started-photos-card-search-button")
                s_adbadobestock.eVar126 = "Images|get-started|Search photos";

            else if ($(this).attr("data-t") == "get-started-vectors-card-search-button")
                s_adbadobestock.eVar126 = "Images|get-started|Search vectors";

            else if ($(this).attr("data-t") == "get-started-illustrations-card-search-button")
                s_adbadobestock.eVar126 = "Images|get-started|Search illustrations";

            else {

                s_adbadobestock.eVar126 = "images|curated collection|" + $($($(this).children()[0]).children()).attr("title");
            }


        }
        if (pathname.indexOf("video") !== -1) {
            if ($(this).attr("data-t") == "get-started-HD-card-search-button")
                s_adbadobestock.eVar126 = "video|get-started|Search HD";

            else if ($(this).attr("data-t") == "get-started-4K-card-search-button")
                s_adbadobestock.eVar126 = "video|get-started|Search 4K";

            else {
                var collection_sec = $($($(this).children()[0]).children()).attr("data-t");
                if (collection_sec.indexOf("curated-collections" > -1))
                    s_adbadobestock.eVar126 = "video|curated collection|" + $($($(this).children()[0]).children()).attr("title");
                if (collection_sec.indexOf("featured-contributor" > -1))
                    s_adbadobestock.eVar126 = "video|featured-contributor|" + $($($(this).children()[0]).children()).attr("title");
            }
        }

        if (pathname.indexOf("/editorial") !== -1) {
            if ($(this).hasClass("js-landing-page-analytics-link") && $(this).hasClass("js-editorial-collection-link"))
                s_adbadobestock.eVar126 = "editorial|featured-collections|" + $(this).attr("data-analytics-title");
            else {
                s_adbadobestock.eVar126 = "editorial|explore-editorial|" + $(this).attr("data-analytics-title");
            }
        }
        if (pathname.indexOf("/template") !== -1) {
            if ($(this).hasClass("js-landing-page-analytics-link"))
                if ($(this).attr("data-analytics-text") === "Search Ps Templates")
                    s_adbadobestock.eVar126 = "template|" + $(this).attr("data-analytics-text") + "|Photoshop Templates";
                else if ($(this).attr("data-analytics-text") === "Search Ai Templates")
                s_adbadobestock.eVar126 = "template|" + $(this).attr("data-analytics-text") + "|Illustrator Templates";
            else if ($(this).attr("data-analytics-text") === "Search Id Templates")
                s_adbadobestock.eVar126 = "template|" + $(this).attr("data-analytics-text") + "|InDesign Templates";
            else s_adbadobestock.eVar126 = "template|" + $(this).attr("data-analytics-text") + "|Creative Templates";
        }

        if (pathname.indexOf("3d-assets") !== -1) {
            if ($(this).attr("data-t") == "preset-search-3D-models-card-search-button-text")
                s_adbadobestock.eVar126 = "3D|search|3D-models";

            else if ($(this).attr("data-t") == "preset-search-3D-lights-card-search-button-text")
                s_adbadobestock.eVar126 = "3D|search|3D-lights";

            else if ($(this).attr("data-t") == "preset-search-3D-materials-card-search-button-text")
                s_adbadobestock.eVar126 = "3D|search|3D-materials";

            else if ($(this).attr("data-t").indexOf("curated-scenes-card-") != -1)
                s_adbadobestock.eVar126 = "3D|curated3Dscenes|" + $($(this).find("img")).attr("title");

            else if ($(this).attr("data-t").indexOf("featured-artists-card") != -1)
                s_adbadobestock.eVar126 = "3D|see what's possible|" + $($(this).find("img")).attr("title");
            else if ($(this).attr("data-t").indexOf("tutorials-card-") != -1)
                s_adbadobestock.eVar126 = "3D|3D essentials|" + $($(this).find("img")).attr("title");
        }
        if (pathname.indexOf("plans") !== -1) {
            if ($(this).attr("href").indexOf("premium") !== -1) {
                s_adbadobestock.eVar126 = "Plans|credits|premium";
            }
            if ($(this).attr("href").indexOf("video") !== -1) {
                s_adbadobestock.eVar126 = "Plans|credits|video";
            }
            if ($(this).attr("href").indexOf("templates") !== -1) {
                s_adbadobestock.eVar126 = "Plans|credits|templates";
            }
            if ($(this).attr("href").indexOf("3d-assets") !== -1) {
                s_adbadobestock.eVar126 = "Plans|credits|3d-assets";
            }
        } else if (pathname.indexOf("plans") == -1) {
            s_adbadobestock.eVar126 = "homepage|collections|" + $(this).attr("data-analytics-title");
        }
        if (!s_adbadobestock.eVar126) s_adbadobestock.eVar126 = "Banner";
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
        s_adbadobestock.linkTrackVars = "prop52,prop69,prop3,prop10,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar126,events";
        s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "internal banner Click");

    })

    jQuery(".alert--aibanner").on("click", ".js-aibanner-alert-close", function () {
        s_adbadobestock.eVar91 = "search:aibanner:dismiss";
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
        s_adbadobestock.linkTrackVars = "prop52,prop69,eVar11,eVar1,eVar32,eVar2,prop3,prop4,prop5,prop8,eVar8,prop10,eVar14,prop12,eVar12,eVar15,eVar16,prop13,eVar19,prop25,eVar22,eVar27,eVar28,eVar35,eVar41,prop52,prop62,eVar79,eVar87,eVar89,eVar91,eVar111,eVar110,eVar111,prop62,eVar46,prop61,eVar119,events";
        s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":aibanner:dismissClick");
    })


    //modal window CTR ctracking
    var modalwindow_text = "",
        modalwindow_href = "";

    if (jQuery(".modal-window-container").css("display") == "block" && pathname.indexOf("fotolia/account") == -1) {


        if (jQuery('p.modal-window-footer a#modal-ok-button').attr('href') === "#") {
            s_adbadobestock.pageName = "stock.adobe.com:admin:10imagesforteam:startSearching";
            //s_adbadobestock.t();
        } else {
            s_adbadobestock.pageName = "stock.adobe.com:admin:10imagesforteam:Ok";
            //s_adbadobestock.t();
        }

        jQuery(".modal-window-container #modal-ok-button").click(function () {
            modalwindow_text = jQuery(this).text();
            modalwindow_href = jQuery(this).attr("href");
            if (modalwindow_text === "OK") {
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
                s_adbadobestock.eVar91 = "admin dialog:10FreeImagesforTeam:OK";
                s_adbadobestock.linkTrackVars = "prop52,prop69,eVar11,eVar1,eVar32,eVar2,prop3,prop4,prop5,prop8,eVar8,prop10,eVar14,prop12,eVar12,eVar15,eVar16,prop13,eVar19,prop25,eVar22,eVar27,eVar28,eVar35,eVar41,prop52,prop62,eVar79,eVar87,eVar89,eVar91,eVar111,eVar110,eVar111,prop62,eVar46,prop61,eVar119,events";
                s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":admin:10imagesforteam:OkClick");
            } else if (modalwindow_href === "#") {
                s_adbadobestock.eVar91 = "admin dialog:FreeImagesforTeam:StartSeraching";
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
                s_adbadobestock.linkTrackVars = "prop52,prop69,eVar11,eVar1,eVar32,eVar2,prop3,prop4,prop5,prop8,eVar8,prop10,eVar14,prop12,eVar12,eVar15,eVar16,prop13,eVar19,prop25,eVar22,eVar27,eVar28,eVar35,eVar41,prop52,prop62,eVar79,eVar87,eVar89,eVar91,eVar111,eVar110,eVar111,prop62,eVar46,prop61,eVar119,events";
                s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":admin:10imagesforteam:startSearchingClick");
            }
        });
    }

    var sell_header = jQuery('.header-menu li').children()[2];
    jQuery(sell_header).click(function () {
        var hrefHeader = jQuery(this).attr('href');
        if (typeof hrefHeader !== "undefined" && hrefHeader && hrefHeader.indexOf("contributor") !== -1) {
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
            s_adbadobestock.eVar91 = "globalnav:header:sell";
            s_adbadobestock.linkTrackVars = "prop52,prop69,eVar11,eVar1,eVar32,eVar2,prop3,prop4,prop5,prop8,eVar8,prop10,eVar14,prop12,eVar12,eVar15,eVar16,prop13,eVar19,prop25,eVar22,eVar27,eVar28,eVar35,eVar41,prop52,prop62,eVar79,eVar87,eVar89,eVar91,eVar111,eVar110,eVar111,prop62,eVar46,prop61,eVar119,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":globalnav:header:sellClick");
        }
    })

    var sell_footer = jQuery('.footer__nav-left li.nav__item').children()[5];


    $("a[href='#premium_tab'],a[href='#images_tab'],a[href='#videos_tab'],a[href='#templates_tab'],a[href='#3d_tab']").click(function () {

        var tab_href = $(this).attr("href");
        var template_href_text;
        if (tab_href === '#premium_tab') {
            template_href_text = "homepage:gallery:premium";
        }
        if (tab_href == '#images_tab') {
            template_href_text = "homepage:gallery:images";
        }
        if (tab_href == '#videos_tab') {
            template_href_text = "homepage:gallery:videos";
        }
        if (tab_href == '#templates_tab') {
            template_href_text = "homepage:gallery:templates";
        }
        if (tab_href == '#3d_tab') {
            template_href_text = "homepage:gallery:3d";
        }
        s_adbadobestock.eVar91 = template_href_text;
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
        s_adbadobestock.linkTrackVars = "prop52,prop69,prop3,prop10,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar91,events";
        s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + template_href_text + " tab" + " Click");
    })

    if (window.location.pathname == "/teams") {

        $("a[href='https://video.tv.adobe.com/v/14973t1?autoplay=true'],a[href='#js-plans-section']").click(function () {
            var team_href = $(this).attr("href");
            var team_click_text;
            if (team_href.indexOf("video.tv.adobe.com/v/14973t1") !== -1) {
                team_click_text = "header:see play video";

            }
            if (team_href.indexOf("#js-plans-section") !== -1) {
                team_click_text = "header:see plans";
            }
            s_adbadobestock.eVar126 = "teams:" + team_click_text;
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
            s_adbadobestock.linkTrackVars = "prop52,eVar32,eVar2,prop8,eVar8,prop10,eVar14,eVar12,eVar15,eVar19,prop25,eVar22,eVar27,eVar35,eVar41,prop52,prop62,eVar79,eVar89,eVar111,eVar126,events";
            s_adbadobestock.tl(this, 'o', s_adbadobestock.pageName + ":" + team_click_text + ' Click');

        })

        $(".js-susi-login").click(function () {
            var team_data = $(this).attr("data-redirect-params");
            var buy_plan;
            if (team_data == '{"key":"STKS"}') {
                buy_plan = ":10 images"
            }

            if (team_data == '{"key":"STKM"}') {
                buy_plan = ":40 images"
            }

            if (team_data == '{"key":"STKL"}') {
                buy_plan = ":750 images"
            }
            s_adbadobestock.eVar91 = "teams" + buy_plan + ":buy now";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event21,event23";
            s_adbadobestock.linkTrackVars = "prop52,eVar32,eVar2,prop8,eVar8,prop10,eVar14,eVar12,eVar15,eVar19,prop25,eVar22,eVar27,eVar35,eVar41,prop52,prop62,eVar79,eVar89,eVar111,eVar91,events";
            s_adbadobestock.tl(this, 'o', s_adbadobestock.pageName + buy_plan + ' Click');

        });

        $(".margin-top-large").click(function () {

            var team_learn = $(this).attr('href');
            if (team_learn.indexOf('/products/creativecloud/stock/') != -1) {
                s_adbadobestock.eVar126 = "teams:inform:Learn more";
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
                s_adbadobestock.linkTrackVars = "prop52,eVar32,eVar2,prop8,eVar8,prop10,eVar14,eVar12,eVar15,eVar19,prop25,eVar22,eVar27,eVar35,eVar41,prop52,prop62,eVar79,eVar89,eVar111,eVar126,events";
                s_adbadobestock.tl(this, 'o', s_adbadobestock.pageName + ":inform:Learn more" + ' Click');
            }


        });

        $(".accordion__item").click(function () {

            if (!$(this).hasClass('js-accordion--open')) {
                s_adbadobestock.eVar91 = "teams:frequently asked question";
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
                s_adbadobestock.linkTrackVars = "prop52,eVar32,eVar2,prop8,eVar8,prop10,eVar14,eVar12,eVar15,eVar19,prop25,eVar22,eVar27,eVar35,eVar41,prop52,prop62,eVar79,eVar89,eVar111,eVar91,events";
                s_adbadobestock.tl(this, 'o', s_adbadobestock.pageName + ":frequently asked question" + ' Click');
            }
        });




        $("a[href='tel:800-915-9428']").click(function () {
            var team_href = $(this).attr('href');
            if (team_href === 'tel:800-915-9428') {
                s_adbadobestock.eVar91 = "teams:contact:800-915-9428";
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
                s_adbadobestock.linkTrackVars = "prop52,eVar32,eVar2,prop8,eVar8,prop10,eVar14,eVar12,eVar15,eVar19,prop25,eVar22,eVar27,eVar35,eVar41,eVar46,prop52,prop62,eVar79,eVar89,eVar111,eVar91,events";
                s_adbadobestock.tl(this, 'o', s_adbadobestock.pageName + ':contact:800-915-9428' + ' Click');
            }

        })
    }




    //Footer click
    $(".footer .left li a").click(function () {
        var footer_href = $(this).attr("href");
        if (footer_href == "#") footer_text = "footer:bar:change region";
        if (footer_href == "/license-terms") footer_text = "footer:bar:license terms";
        if (footer_href == "//helpx.adobe.com/support.html#/product/stock") footer_text = "footer:bar:learn and support";
        if (footer_href == "//blogs.adobe.com/creativecloud/adobe-stock/") footer_text = "footer:bar:blog";
        if (footer_href == "//www.adobe.com/company.html") footer_text = "footer:bar:company";
        if (footer_href == "//contributor.stock.adobe.com/?as_channel=stock&as_source=globalnav&as_campclass=brand&as_campaign=footer") footer_text = "footer:bar:sell images";
        s_adbadobestock.eVar249 = footer_text;
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event249";
        s_adbadobestock.linkTrackVars = "prop52,prop69,eVar11,eVar1,eVar32,eVar2,prop3,prop4,prop5,prop8,eVar8,prop10,eVar14,prop12,eVar12,eVar15,eVar16,prop13,eVar19,prop25,eVar22,eVar27,eVar28,eVar35,eVar41,eVar46,prop52,prop62,eVar79,eVar87,eVar89,eVar91,eVar111,eVar249,events";
        s_adbadobestock.tl(this, 'o', s_adbadobestock.prop3 + ":" + footer_text + " Click");
    });


    $(".footer .right li a").click(function () {
        s_adbadobestock.eVar249 = "footer:bar:adobe exit pages";
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event249";
        s_adbadobestock.linkTrackVars = "prop52,prop69,eVar11,eVar1,eVar32,eVar2,prop3,prop4,prop5,prop8,eVar8,prop10,eVar14,prop12,eVar12,eVar15,eVar16,eVar46,eVar41,prop13,eVar19,prop25,eVar22,eVar27,eVar28,eVar35,prop52,prop62,eVar79,eVar87,eVar89,eVar91,eVar111,eVar249,events";
        s_adbadobestock.tl(this, 'o', s_adbadobestock.prop3 + ":footer:bar:adobe exit pages" + " Click");
    })


    //visual search

    $(".js-camera-icon").click(function () {
        s_adbadobestock.eVar205 = "click"; //CTA tracker
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event110";
        s_adbadobestock.linkTrackVars = "prop52,prop69,prop10,eVar12,eVar14,eVar211,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop61,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,eVar111,eVar119,eVar205,events";
        s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "visualsearch:click:open");
    })


    document.addEventListener("dragstart", function (event) {
        var droparea = $("#js-visual-search-popover").css("display");
        if (droparea == "none") {
            setTimeout(function () {
                var droparea = $("#js-visual-search-popover").css("display");
                if (droparea == "block" && typeof digitalData !== 'undefined' && typeof digitalData.eventInfo !== 'undefined') {
                    var errorcode = digitalData.eventInfo.eventLabel;
                    if (errorcode == "vsdrop_open_result") {
                        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event110";
                        s_adbadobestock.eVar205 = "drop|result"; //CTA tracker
                        s_adbadobestock.linkTrackVars = "prop52,prop69,prop10,eVar12,eVar14,eVar211,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop61,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,eVar111,eVar119,eVar205,events";
                        s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "visualsearch:drop|result:open");
                    }
                }
            }, 200);
        }
    });

    $("#js-vsupload-link").click(function () {
        s_adbadobestock.eVar91 = "visualsearch:dropmodal:browse"; //CTA tracker
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
        s_adbadobestock.linkTrackVars = "prop52,prop69,prop10,eVar12,eVar14,eVar211,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop61,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,eVar111,eVar119,events";
        s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "visualsearch:dropmodal:browse Click");
    });

    document.addEventListener("drop", function (event) {
        setTimeout(function () {
            var dropareaText = $("#js-vs-error").text();
            if (dropareaText.length > 0 && typeof digitalData !== 'undefined' && typeof digitalData.eventInfo !== 'undefined') {
                var errorcode = digitalData.eventInfo.eventLabel;
                s_adbadobestock.prop63 = errorcode;
                s_adbadobestock.eVar121 = errorcode; //CTA tracker
                s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event180";
                s_adbadobestock.linkTrackVars = "prop52,prop69,prop10,eVar12,eVar14,eVar211,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop61,prop62,prop63,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,eVar111,eVar119,eVar121,events";
                s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "error");
            }
        }, 500);

    });


    //plans page button click
    $("#js-plans-page-monthly-tab").click(function () {
        if ($("#js-plans-page-annual-tab").attr("data-state") === "enabled" || $(this).attr("data-state") === "disabled") {
            s_adbadobestock.eVar91 = "plans:toggle:monthly commitment"; //CTA tracker
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
            s_adbadobestock.linkTrackVars = "prop52,prop69,prop10,eVar12,eVar14,eVar211,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop61,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,eVar111,eVar119,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "plans:toggle:monthly commitment Click");
        }
    });
    $("#js-plans-page-annual-tab").click(function () {
        if ($(this).attr("data-state") === "disabled") {
            s_adbadobestock.eVar91 = "plans:toggle:yearly commitment"; //CTA tracker
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97";
            s_adbadobestock.linkTrackVars = "prop52,prop69,prop10,eVar12,eVar14,eVar211,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop61,prop62,eVar15,eVar89,eVar11,eVar91,eVar1,eVar87,eVar2,eVar125,eVar111,eVar119,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "plans:toggle:yearly commitment Click");
        }
    });

    //overlays tagging
    if ($(".modal-window-canvas").css("display") == "block") {

        if ($("#modal-cancel-button").css("display") == "inline-block" && $("#modal-confirm-button").css("display") == "inline-block") {

            s_adbadobestock.t({
                pageName: "stock.adobe.com:welcomeback:alreadymigrated"
            });
        } else if ($("#modal-ok-button").css("display") == "inline-block") {
            s_adbadobestock.t({
                pageName: "stock.adobe.com:welcomeback:alreadyinitiatedtransfer"
            });
        }
    }

    if (pathname.search(/^\/([a-z_\/]{0,6})?plans/) !== -1) {

        /*Start PeekaBoo credit pack click*/
        var cta_event = '';
        $("a[href*='/teams']").on('click', function () {
            if ($(this).attr('class').indexOf('right') !== -1) {
                cta_event = 'plans:link:explore team plans';
            } else if ($(this).attr('class').indexOf('button--primary') !== -1) {
                cta_event = 'plans:cta:teams learn more';
            }

            if (cta_event != '') {
                s_adbadobestock.eVar126 = cta_event;
            }
            s_adbadobestock.eVar91 = "plans:cta:team plans";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event155";
            s_adbadobestock.linkTrackVars = "prop52,eVar32,eVar2,prop8,eVar8,prop10,eVar14,eVar12,eVar15,eVar19,prop25,eVar22,eVar27,eVar35,eVar41,eVar46,prop52,prop62,eVar79,eVar89,eVar111,eVar91,eVar126,events";
            s_adbadobestock.tl(this, 'o', s_adbadobestock.pageName + ':cta:team plans' + ' Click');
        });

        //PLANS page enterprise learn more click
        $(document).on("click", 'a[href*="adobe.com/go/stock"]', function () {
            s_adbadobestock.eVar91 = "plans:cta:enterprise plans";
            s_adbadobestock.eVar126 = "plans:cta:enterprise learn more";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event155";
            s_adbadobestock.linkTrackVars = "prop52,eVar32,eVar2,prop8,eVar8,prop10,eVar14,eVar12,eVar15,eVar19,prop25,eVar22,eVar27,eVar35,eVar41,eVar46,prop52,prop62,eVar79,eVar89,eVar111,eVar91,eVar126,events";
            s_adbadobestock.tl(this, 'o', s_adbadobestock.pageName + ':cta:enterprise plans' + ' Click');
        });
        // Peek A Boo Credit pack click
        $(document).on("click", "div.margin-top-xsmall a[href='#get-credits'].js-smooth-nav", function () {
            s_adbadobestock.eVar91 = "plans:cta:peekaboo credit pack";
            s_adbadobestock.eVar126 = "plans:peekaboo:credit packs";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event155";
            s_adbadobestock.linkTrackVars = "prop52,eVar2,eVar8,eVar12,eVar14,eVar15,eVar19,eVar22,eVar27,eVar32,eVar35,eVar41,eVar46,eVar79,eVar89,eVar91,eVar111,eVar126,prop8,prop10,prop25,prop52,prop62,events";
            s_adbadobestock.tl(this, 'o', s_adbadobestock.pageName + ':cta:peekaboocreditpack' + ' Click');
        });

        //Request a Consultation link click
        $(document).on('click', "div.theme.black div.padding-xlarge a.blue.picton-text", function () {
            //console.log($(this).attr('class'));
            s_adbadobestock.eVar91 = "plans:cta:requestaconsultation";
            s_adbadobestock.eVar126 = "plans:link:request a consultation";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event155";
            s_adbadobestock.linkTrackVars = "prop52,eVar2,eVar8,eVar12,eVar14,eVar15,eVar19,eVar22,eVar27,eVar32,eVar35,eVar41,eVar46,eVar79,eVar89,eVar91,eVar111,eVar126,prop8,prop10,prop25,prop52,prop62,events";
            s_adbadobestock.tl(this, 'o', s_adbadobestock.pageName + ':cta:requestaconsultation' + ' Click');
        });
        /*End PeekaBoo credit pack click*/
    }


    $(document).on("mouseup", '[data-group~="buy-now-button"]', function () {
        setTimeout(function () {
            digitalData.product.core_type = digitalData.product.core_type.replace("/Applications/", "");
            s_adbadobestock.eVar91 = "plans:" + digitalData.product.core_type + ":" + digitalData.internalInfo.elementName;
            s_adbadobestock.eVar1 = "plans";
            s_adbadobestock.eVar87 = "direct";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event21,event23";
            s_adbadobestock.linkTrackVars = "prop10,prop52,eVar12,eVar14,prop25,eVar22,eVar28,eVar41,eVar46,prop52,eVar111,prop61,eVar119,eVar87,eVar1,eVar91,prop62,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":plans subscription Click");
        }, 300);
    })

    if (pathname.indexOf("license-terms") !== -1) {
        //license terms: plasn click
        $(document).on("click", 'a span[data-t="footer-view-plans-button-text"]', function () {
            s_adbadobestock.eVar126 = "license-term|footer section|view plans";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
            s_adbadobestock.linkTrackVars = "prop69,prop3,prop10,prop52,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar126,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + s_adbadobestock.eVar126 + " Click");

        })

        //license terms: view full restriction click
        $(document).on("click", 'span[data-t="comparison-chart-view-full-restrictions-button-text"]', function () {
            s_adbadobestock.eVar126 = "license-term|comparison chart|view full restriction";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
            s_adbadobestock.linkTrackVars = "prop69,prop3,prop10,prop52,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar126,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + s_adbadobestock.eVar126 + " Click");

        })

        //license terms: enterprise-licensing click
        $(document).on("click", 'a[href*="legal/terms/enterprise-licensing"]', function () {
            s_adbadobestock.eVar126 = "footer section|subtext|enterprise license page";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
            s_adbadobestock.linkTrackVars = "prop69,prop3,prop10,prop52,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar126,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + s_adbadobestock.eVar126 + " Click");

        })

        //license terms: enterprise-licensing click
        $(document).on("click", 'a[href*="/Member/LicenseHistory"]', function () {
            s_adbadobestock.eVar126 = "footer section|subtext|license history";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
            s_adbadobestock.linkTrackVars = "prop69,prop3,prop10,prop52,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar126,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + s_adbadobestock.eVar126 + " Click");

        })


        //license terms: enterprise-licensing click
        $(document).on("click", 'a[href*="go/stockterms"]', function () {
            s_adbadobestock.eVar126 = "footer section|subtext|terms and conditions ";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
            s_adbadobestock.linkTrackVars = "prop69,prop3,prop10,prop52,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar126,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + s_adbadobestock.eVar126 + " Click");

        })


        $(document).on("click", 'span[data-t="comparison-accordion-view-comparisons-button-text"]', function () {
            s_adbadobestock.eVar126 = "license-term|restrictions displays|view comparisons";
            s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
            s_adbadobestock.linkTrackVars = "prop69,prop3,prop10,prop52,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar126,events";
            s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + s_adbadobestock.eVar126 + " Click");

        })

    }
    $(document).on("mouseup", ".accordion__title", function () {
        s_adbadobestock.eVar126 = pathname.replace("/", "") + "|FAQ|" + $(this).text().trim();
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event155";
        s_adbadobestock.linkTrackVars = "prop69,prop3,prop10,prop52,eVar12,eVar14,prop25,eVar22,eVar28,eVar25,eVar35,eVar41,eVar46,prop52,eVar111,prop62,eVar15,eVar89,eVar11,eVar1,eVar87,eVar2,prop61,eVar119,eVar126,events";
        s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":FAQ Click");

    })



    //migration v2
    $("a[data-analytics-campaign='complete migration and get 33 off']").click(function () {
        s_adbadobestock.eVar91 = "search:complete migration and get 33 off :lets go";
        s_adbadobestock.linkTrackEvents = s_adbadobestock.events = "event97,event81,event50";
        s_adbadobestock.linkTrackVars = "prop10,prop25,prop52,prop62,prop61,eVar12,eVar14,eVar22,eVar28,eVar41,eVar46,eVar91,eVar119,eVar111,eVar247,eVar249,,events";
        s_adbadobestock.tl(true, "o", s_adbadobestock.prop3 + ":" + "lets go Click");
    });



    //end of preview corp

    //non admin modal clicks

    /*  $(document).on('click', ".js-cant-buy-teams-cc-link,#cant-buy-team-plan-link", function () {
     s_adbadobestock.events = "event97";
      s_adbadobestock.linkTrackVars = "prop10,prop25,prop52,prop62,prop61,eVar12,eVar14,eVar22,eVar28,eVar41,eVar46,eVar91,eVar119,eVar111,eVar247,eVar249,,events";
      if($(this).hasClass("js-cant-buy-teams-cc-link")){
          s_adbadobestock.eVar91 ='modal:cannotcompletepurchase:business center';
         linkName= 'business center link click'
      }
      else{
         s_adbadobestock.eVar91 ='modal:cannotcompletepurchase:see individual plans';
          linkName = 'See individual Plans button click' 
      }
      s_adbadobestock.tl(true, "o", linkName);
    })
*/
}
});
