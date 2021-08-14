
      (function(){
        olark.extend('GoogleAnalytics');
olark.extend('CalloutBubble');
olark.extend('Feedback');
olark.extend('Sounds');


        var isNewVersion = olark._ && olark._.versions && (olark._.versions.follow || olark._.versions.popout)
        if(isNewVersion) {
          olark._.finish({"system":{"restart_chat_offline_button_text":"Leave a message","offline_survey_website_label":"Website","processing_file_error_text":"There was a problem processing your file.","feedback_survey_question_operator_intelligence_high":"Extremely knowledgeable","forced_rpc_server":"knrpc.olark.com/nrpc","offline_button_text":"Leave A Message","right_margin":20,"show_end_popout":0,"branding_panel_message_text":"10,000+ companies rely on Olark software to chat with customers directly.","poll":false,"hb_show_button_text":true,"branding":"whitelabel","conversation_id_error_text":"File uploading is currently unavailable.","offline_survey_phone_placeholder":"Enter your phone number...","allow_change_colors":true,"habla_sizebutton_text_expanded":"_","not_available_text":"Contact us!","feedback_survey_question_operator_speed_low":"Not at all responsive","prechat_survey_email_placeholder":"Enter your email...","habla_offline_sent_text":"Thanks for your message! We'll get back to you shortly.","top_margin":0,"offline_website_validation_message":"Please enter a valid URL","check_for_status":"Olark Chat (startup)","disable_width":true,"enable_buttons":1,"hb_primary_color":"#3C78D3","restart_chat_online_button_text":"Start conversation","file_type_error_text":"This file type is not allowed.","offline_required_error_message":"Please complete all required fields","pre_chat_error_text":"Please enter your name and email in case we get disconnected.","show_pre_chat":0,"flash_titlebar":1,"send_transcript_begin_button_text":"Send Transcript","say_text":"Type here and hit enter to chat","default_flash_on_icon":"https://static.olark.com/js/images/orange.ico","hb_chatbox_size":"md","hbl_cookie_path":"/","feedback_survey_question_2_text":"Question 2 of 5","feedback_survey_question_1_text":"Question 1 of 5","offline_msg_mode":1,"feedback_survey_question_5_text":"Question 5 of 5","prechat_survey_name_placeholder":"Enter your name...","line_length":21,"send_transcript_cancel_text":"No Thanks","feedback_survey_submission_error_message":"There was an error submitting your answer, please try again.","prechat_survey_phone_label":"Phone","offline_email_validation_message":"Please enter a valid email address","prechat_survey_welcome_message":"Hi! Let\u2019s get some quick info so we can better serve you:","start_expanded":0,"branding_panel_cancel_text":"Go back","send_transcript_complete_button_text":"Transcript Sent","require_offline_phone":0,"feedback_survey_question_3_text":"Question 3 of 5","disable_default_visitor_information":0,"feedback_survey_button_submitting":"Submitting","feedback_survey_question_operator_attitude_text":"How friendly was the chat agent?","language":"en","require_name":2,"habla_offline_email_text":"click here and type your Email","prechat_survey_email_label":"Email","operator_has_stopped_typing_text":"has stopped typing","plugin_path":"https://static.olark.com/js/plugins/","feedback_survey_question_chat_text":"How satisfied were you with this chat?","feedback_survey_question_operator_intelligence_low":"Not at all knowledgeable","rules":[{"kind":"Rule","perPage":true,"description":"Blocking  user ip ","perVisit":false,"clause":{"clauses":[{"kind":"ContainsClause","right":"178.19.226.25","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"ContainsClause","right":"213.212.201.74","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"ContainsClause","right":"114.23.106.92","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"ContainsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"OrClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.hide","options":{}}],"whenOnline":true,"perVisitor":false,"id":"1593698138714004910173833884568","whenOffline":true},{"kind":"Rule","perPage":false,"description":"Automatic chat in Emergency support page after 95 secs","perVisit":false,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/emergency-server-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Facing technical problems that can't wait? Get immediate access to our team of highly trained engineers who will resolve your issue!"}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires emergency support assistance"}}],"whenOnline":true,"perVisitor":true,"id":"1568404701807001470733400042834","whenOffline":false},{"kind":"Rule","perPage":false,"description":"Automatic chat in Outsourced Hosting Support page after 95 secs","perVisit":true,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/outsourced-hosting-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Looking for technical support for your customers? I can help you choose the right solution. :)"}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires help with outsourced hosting support"}}],"whenOnline":true,"perVisitor":false,"id":"156761005416905211028299786256","whenOffline":false},{"kind":"Rule","perPage":false,"description":"Auto chat initiation after 95 secs on All In One Support page","perVisit":true,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/all-in-one-outsourced-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Looking for technical support for your customers? I can help you choose the right solution. :)"}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires help with All In One Support"}}],"whenOnline":true,"perVisitor":false,"id":"156760975717802387268709944319","whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Ask if customer needs cPanel migration help 95 secs","perVisit":true,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/blog/cpanel-price-rise/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentForThisVisit","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"We can help you reduce cPanel license costs. Talk to our solutions expert."}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires help with cPanel migration"}}],"perPage":false,"perVisitor":false,"id":"156180664581907395646480190301","whenOffline":false},{"kind":"Rule","perPage":false,"description":"Initiate Chat when Visitor Spends more than 95 secs on a Server management page","perVisit":true,"clause":{"clauses":[{"kind":"ContainsClause","right":"https://bobcares.com/server-management/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":95,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Do you need any technical help with your servers? Our server administrators are on standby, and we can help you right away."}},{"kind":"Action","method":"api.chat.sendNotificationToOperator","options":{"body":"Visitor requires Server Management assistance"}}],"whenOnline":true,"perVisitor":false,"id":"1560879930585090330939226406","whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Start Chat after user spends more than 120 secs on a non blog page","perVisit":false,"clause":{"clauses":[{"kind":"DoesNotContainClause","right":"blog","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/server-management/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/blog/cpanel-price-rise/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/all-in-one-outsourced-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/outsourced-hosting-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"DoesNotContainClause","right":"https://bobcares.com/emergency-server-support/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"GreaterThanClause","right":120,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"14.142.179.150","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}}],"perPage":true,"perVisitor":false,"id":"154991830899706140224232233096","whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Start chat after user spends more than 80 secs on a blog page","perVisit":true,"clause":{"clauses":[{"kind":"GreaterThanClause","right":80,"left":{"varname":"visitor.secondsSpentOnCurrentPage","kind":"VariableClause"}},{"kind":"ContainsClause","right":"bobcares.com/blog/","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.box.expand","options":{}}],"perPage":false,"perVisitor":false,"id":"154969738656207923692247409975","whenOffline":false},{"kind":"Rule","perPage":false,"description":"Start a chat after a customer has viewed 2 pages, so I can engage without being too intrusive","perVisit":true,"clause":{"clauses":[{"kind":"EqualsClause","right":2,"left":{"varname":"visitor.pageCountForThisVisit","kind":"VariableClause"}}],"kind":"OrClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Hi, we're here to answer any questions"}},{"kind":"Action","method":"api.box.expand","options":{}}],"whenOnline":true,"perVisitor":false,"id":2316,"whenOffline":false},{"kind":"Rule","perPage":false,"description":"Highlight returning visitors in my buddy list","perVisit":false,"clause":{"clauses":[{"kind":"GreaterThanClause","right":1,"left":{"varname":"visitor.visitCount","kind":"VariableClause"}},{"kind":"NotEqualsClause","right":"103.214.235.222","left":{"varname":"visitor.ip","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.chat.updateVisitorNickname","options":{"snippet":"Returning Visitor"}}],"whenOnline":true,"perVisitor":true,"id":2317,"whenOffline":false},{"kind":"Rule","perPage":false,"description":"Target my French visitors by sending a custom message in their language","perVisit":true,"clause":{"clauses":[{"kind":"EqualsClause","right":"FR","left":{"varname":"visitor.countryCode","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Bonjour, Comment allez-vous?"}}],"whenOnline":true,"perVisitor":false,"id":"15490013273850","whenOffline":false}],"expandOnMessageReceived":0,"online_header_text":"Now chatting","resize_length":25,"allow_change_width":true,"cookie_path":"/","feedback_survey_question_chat_high":"Extremely satisfied","habla_offline_submit_value":"Send","offline_survey_phone_label":"Phone","prechat_survey_name_label":"Name","show_away_as_header":0,"width":260,"offline_survey_name_label":"Name","start_hidden":0,"feedback_survey_question_4_text":"Question 4 of 5","disable_set_cookies":false,"disable_get_cookies":false,"flash_icons":1,"local_user_display_name":"\u0026rarr;","welcome_msg":"Questions? We'd love to chat.","offline_header_text":"Leave A Message","inline_css_url":"static.olark.com/css/3/9/3971c742ac2346c431f086113e61d518.css","disableGoogleAnalytics":0,"prechat_phone_validation_message":"Please enter a valid phone number","online_button_text":"Chat with us","habla_closebutton_text":"x","pre_chat_submit":"Click here to start chatting","allow_change_height":true,"pre_chat_message":"Questions? We'd love to chat.","popout_css_url":"static.olark.com/css/9/8/98c23c22d4700f33524c3faf5aa12bd2.css","in_chat_text":"Now chatting","parse_links":1,"operator_is_typing_text":"is typing...","send_transcript_error_text":"Please enter a valid email address","inline_css_url_quirks":"static.olark.com/css/8/4/844fb02b40ed2e8b64b542b43ff5f68e.css","left_margin":20,"rtl":false,"myname":"you","feedback_survey_question_operator_speed_high":"Extremely responsive","feedback_survey_question_operator_speed_text":"How responsive was the chat agent?","feedback_survey_button_finish":"Finish","offline_survey_name_placeholder":"Enter your name...","right_to_left":false,"hb_custom_style":{"general":{"secondaryColor":"#3c78d3","corners":"soft"}},"close_hides_window":false,"prechat_website_validation_message":"Please enter a valid URL","offline_message":"We're not around, but we'd love to chat another time.","show_away":0,"feedback_survey_end_message":"Thank you for your feedback :)","habla_end_popout_text":"","busy_text":"Contact us","start_visible":false,"offline_survey_welcome_message":"We're not around but we still want to hear from you! Leave us a note:","is_inline":0,"prechat_required_error_message":"Please complete all required fields","offline_survey_email_label":"Email","disable_offline_messaging_fallback":true,"offline_survey_website_placeholder":"Enter your website...","habla_offline_phone_text":"click here and type your Phone Number","offline_survey_email_placeholder":"Enter your email...","default_flash_off_icon":"https://static.olark.com/js/images/white.ico","google_analytics_domain":"auto","prechat_survey":{"is_enabled":true,"pages":[[{"is_required":true,"type":"name"},{"is_required":true,"type":"email"}]]},"send_transcript_placeholder":"Email","feedback_survey_complete_button_text":"Feedback Sent","feedback_survey_begin_button_text":"Rate Chat","use_theme":"cryptic_capybara","feedback_survey_button_next":"Next","offline_survey_submit_button_text":"Send","require_phone":0,"busy_message":"All of our representatives are with other customers at this time. We will be with you shortly.","hb_enable_uploads":false,"feedback_survey_question_chat_low":"Not at all satisfied","enable_google_analytics":false,"hb_dark_theme":false,"feedback_survey_question_operator_intelligence_text":"How knowledgeable was the chat agent?","hide_when_away":0,"send_text":"Send","corner_position":"BR","bottom_margin":0,"resize_input_height":60,"email_body_error_text":"You must complete all fields and specify a valid email address","panel_offset":20,"hb_disable_mobile":false,"feedback_survey_question_operator_attitude_high":"Extremely friendly","offline_survey_thank_you_message":"Thanks for your message! We will have a member of our team contact you shortly.","hb_position":"right","require_email":1,"prechat_survey_website_label":"Website","prechat_survey_next_button_text":"Next","habla_popout_text":"\u0026gt;","send_transcript_title_text":"Send Transcript","dismiss_message_text":"Dismiss","input_height":20,"upload_rejected_error_text":"File uploading is currently unavailable.","habla_offline_body_text":"We're not around but we still want to hear from you! Leave us a note:","hide_min_max_buttons":0,"divid":"habla_window_div","ended_chat_message":"This chat has ended.","file_size_error_text":"This file size is too large.","start_habla_window_visible":false,"prechat_survey_website_placeholder":"Enter your website...","offline_survey_next_button_text":"Next","enableLanguageTranslation":false,"url_handler":"https://static.olark.com/jsclient-latest/follow.html?v=1426711435610","inline_css_url_ie":"static.olark.com/css/0/b/0b5c605cbc1c9745fb33b5e81c6184ad.css","offline_survey":{"pages":[[{"is_required":true,"type":"name"},{"is_required":true,"type":"email"},{"label":"Message","is_required":true,"type":"textarea","placeholder_text":""}]]},"prechat_email_validation_message":"Please enter a valid email address","offline_phone_validation_message":"Please enter a valid phone number","default_localization":"en-US","end_chat_button_text":"End Chat","feedback_survey_question_additional_feedback_text":"Additional Feedback.","away_text":"Contact us","prechat_survey_phone_placeholder":"Enter your phone number...","append_to_body":1,"hb_show_as_tab":false,"disable_expand_text_input":false,"show_popout":0,"feedback_survey_cancel_text":"Cancel","habla_sizebutton_text_compressed":"^","expandOnFirstMessageReceived":1,"url_handler_target_window":"_top","hide_not_available":0,"generic_upload_error_text":"File uploading is currently unavailable.","visitor_id_error_text":"File uploading is currently unavailable.","habla_special_div_show_type":"block","allowed_domains":"my.bobcares.com","is_popup":0,"disable_extra_br":true,"branding_panel_link_text":"Try Olark on your site","hb_theme_override":{"bg_image_size":"130px","primary_color":"#751A33","enabled":false,"bg_image_url":"https://static.olark.com/a/theme/images/seasonal-fall-1.png","expiration_date":"1678975125"},"feedback_survey_question_additional_feedback_placeholder":"Type message here","feedback_survey_question_operator_attitude_low":"Not at all friendly","branding_link_text":"Powered by Olark","sending_text":"sending","height":155,"prechat_survey_submit_button_text":"Start chatting","habla_name_input_text":"click here and type your Name","before_chat_text":"Chat with us","show_in_buddy_list":"chatting","hkey":"PHNwYW4gc3R5bGU9ImRpc3BsYXk6bm9uZSI+PGEgaWQ9ImhibGluazkiPjwvYT5odHRwOi8vd3d3Lm9sYXJrLmNvbTwvc3Bhbj5Qb3dlcmVkIEJ5IDxhIGhyZWY9Imh0dHA6Ly93d3cub2xhcmsuY29tLz9yaWQ9MzkyOC00NDAtMTAtOTUwNiZhbXA7cG93ZXJlZF9mPTEmYW1wO3V0bV9tZWRpdW09d2lkZ2V0JmFtcDt1dG1fY2FtcGFpZ249cG93ZXJlZF9ieV9mcmVlJmFtcDt1dG1fc291cmNlPTM5MjgtNDQwLTEwLTk1MDYiIGlkPSJoYmxpbms5OSIgdGFyZ2V0PSJfYmxhbmsiPk9sYXJrPC9hPg==","md5":"edfd120824ee50cb0c5847c8158f63ea","site_id":"3928-440-10-9506","template":null,"operators":{"1032222":{"avatar_url":"//static.olark.com/imageservice/6f9db67cd649432b7d785b7d36e2430f.png"},"1045587":{"avatar_url":"//static.olark.com/imageservice/4b4afb2dd2d2a133e06eff36c25866ee.png"},"1045588":{"avatar_url":"//static.olark.com/imageservice/473f85dad38cc6437bc205155a65007d.png"},"1085801":{"avatar_url":"//static.olark.com/imageservice/83b51adacbc59aa19fcd1d8233cf6c2d.png"},"1128655":{"avatar_url":"//static.olark.com/imageservice/787646ace2e5e9021d4b6c850262f2a5.png"}}},"GoogleAnalytics":{"enable_custom_variables":true,"load_ga_if_missing":false,"had_conversation_page_slot_number":5,"had_conversation_session_slot_number":4,"had_conversation_visitor_slot_number":3,"create_custom_tracker":false,"enabled":true,"allow_linker":false,"track_chat_start_page":true},"CalloutBubble":{"bubble_image_url":"https://static.olark.com/imageservice/library/simple/have-questions.png","enabled":true,"slide":true},"Feedback":{"enabled":true},"Sounds":{"enabled":true}});
        }else{
          olark.configure(function(conf){
            conf.system.site_id="3928-440-10-9506";
          });
          olark._.finish();
        }
      })();
    