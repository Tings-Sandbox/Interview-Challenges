/*Sanitize the following space-separated strings of nonalphabetic characters and alphabetize them. What (sanitized) string is first? */

var string = "h$|j..g|qr@p$ $r.|@$.jhpqg| .rpq@.$hg||j$ r.$g||pq$j@.h jh|.pq.|@gr$$ j|g$h@.p.r|q$ pgq|h$j.$|r.@ qgp@h$r$.j||. h@|$pr.j|qg.$ h|@qj.p$g$|.r @$r|hq.j|g.p$ |$.gj.rhq@p|$ .p.|@q|j$g$rh |.|$hgr@pj.q$ $grj.h@$q|p.| jhr$|$p@|..qg q|.j$g@.p$h|r $q.$@rpgj||.h .jrhg@.|$q|$p p.@r|gj$$h.q| rq$|.@|pjh.$g $.hqj@p$||g.r @$.gj|q$|h.rp @$.$h|q.g|pjr g.rq.h|@$$pj| $j@.hgq$|p|.r qhp||$j..g@r$ .qrp$gh$|@j.| h|g.$q.r$jp@| $@jq.r|gh|.p$"

var result = string.replace(/[^a-zA-Z\s]/g, "").split(" ").sort()[0];

console.log(result); //gjqhrp
