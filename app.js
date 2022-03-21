var words = "AdmitAdoptAgreeAllowAlterApplyArgueAriseAvoidBeginBlameBreakBringBuildBurstCarryCatchCauseCheckClaimCleanClearClimbCloseCountCoverCrossDanceDoubtDrinkDriveEnjoyEnterExistFightFocusForceGuessImplyIssueJudgeLaughLearnLeaveLet’sLimitMarryMatchOccurOfferOrderPhonePlacePointPressProveRaiseReachReferRelaxServeShallShareShiftShootSleepSolveSoundSpeakSpendSplitStandStartStateStickStudyTeachThankThinkThrowTouchTrainTreatTrustVisitVoiceWasteWatchWorryWouldWriteAbuseAdultAgentAngerAppleAwardBasisBeachBirthBlockBloodBoardBrainBreadBreakBrownBuyerCauseChainChairChestChiefChildChinaClaimClassClockCoachCoastCourtCoverCreamCrimeCrossCrowdCrownCycleDanceDeathDepthDoubtDraftDramaDreamDressDrinkDriveEarthEnemyEntryErrorEventFaithFaultFieldFightFinalFloorFocusForceFrameFrankFrontFruitGlassGrantGrassGreenGroupGuideHeartHenryHorseHotelHouseImageIndexInputIssueJapanJonesJudgeKnifeLauraLayerLevelLewisLightLimitLunchMajorMarchMatchMetalModelMoneyMonthMotorMouthMusicNightNoiseNorthNovelNurseOfferOrderOtherOwnerPanelPaperPartyPeacePeterPhasePhonePiecePilotPitchPlacePlanePlantPlatePointPoundPowerPressPricePridePrizeProofQueenRadioRangeRatioReplyRightRiverRoundRouteRugbyScaleSceneScopeScoreSenseShapeShareSheepSheetShiftShirtShockSightSimonSkillSleepSmileSmithSmokeSoundSouthSpaceSpeedSpiteSportSquadStaffStageStartStateSteamSteelStockStoneStoreStudyStuffStyleSugarTableTasteTerryThemeThingTitleTotalTouchTowerTrackTradeTrainTrendTrialTrustTruthUncleUnionUnityValueVideoVisitVoiceWasteWatchWaterWhileWhiteWholeWomanWorldYouth"
let wordChoices=words.match(/.{1,5}/g);
var mustbereal = "abuseadultagentangerappleawardbasisbeachbirthblockbloodboardbrainbreadbreakbrownbuyercausechainchairchestchiefchildchinaclaimclassclockcoachcoastcourtcovercreamcrimecrosscrowdcrowncycledancedeathdepthdoubtdraftdramadreamdressdrinkdriveearthenemyentryerroreventfaithfaultfieldfightfinalfloorfocusforceframefrankfrontfruitglassgrantgrassgreengroupguidehearthenryhorsehotelhouseimageindexinputissuejapanjonesjudgeknifelauralayerlevellewislightlimitlunchmajormarchmatchmetalmodelmoneymonthmotormouthmusicnightnoisenorthnovelnurseofferorderotherownerpanelpaperpartypeacepeterphasephonepiecepilotpitchplaceplaneplantplatepointpoundpowerpresspriceprideprizeproofqueenradiorangeratioreplyrightriverroundrouterugbyscalescenescopescoresenseshapesharesheepsheetshiftshirtshocksightsimonskillsleepsmilesmithsmokesoundsouthspacespeedspitesportsquadstaffstagestartstatesteamsteelstockstonestorestudystuffstylesugartabletasteterrythemethingtitletotaltouchtowertracktradetraintrendtrialtrusttruthuncleunionunityvaluevideovisitvoicewastewatchwaterwhilewhitewholewomanworldyouthalconaughthellaone’soughtthametherethinethinewherewhichwhosewhosoyoursyoursadmitadoptagreeallowalterapplyargueariseavoidbeginblamebreakbringbuildburstcarrycatchcausecheckclaimcleanclearclimbclosecountcovercrossdancedoubtdrinkdriveenjoyenterexistfightfocusforceguessimplyissuejudgelaughlearnleavelet’slimitmarrymatchoccurofferorderphoneplacepointpressproveraisereachreferrelaxserveshallshareshiftshootsleepsolvesoundspeakspendsplitstandstartstatestickstudyteachthankthinkthrowtouchtraintreattrustvisitvoicewastewatchworrywouldwriteaboveacutealivealoneangryawareawfulbasicblackblindbravebriefbroadbrowncheapchiefcivilcleanclearclosecrazydailydirtyearlyemptyequalexactextrafaintfalsefifthfinalfirstfreshfrontfunnygiantgrandgreatgreengrosshappyharshheavyhumanidealinnerjointlargelegallevellightlocallooseluckymagicmajorminormoralnakednastynavalotherouterplainprimepriorproudquickquietrapidreadyrightromanroughroundroyalruralsharpsheershortsillysixthsmallsmartsolidsorrysparesteepstillsupersweetthickthirdtighttotaltoughupperupseturbanusualvaguevalidvitalwhitewholewrongyoungaforeafterbotheothersinceslashuntilwherewhileabackabaftaboonaboutaboveacceladownafootaforeafoulafteragainagapeagogoagoneaheadahullalifealikealinealoftalonealongaloofaloudamissamplyamuckapaceapartaptlyarearasideaskewawfulbadlyballybelowcannycheapcleanclearcoylydailydimlydirtydittodrilydrylydullyearlyextrafalsefatlyfeylyfirstfitlyforteforthfreshfullyfunnygailygaylygodlygreathaplyheavyhellahencehotlyicilyinfraintl.jildijollylaxlylentolightlowlymadlymaybenevernewlynoblyoddlyoftenotheroughtpartypianoplainplonkplumbpriorqueerquickquiteramenrapidredlyrightroughroundsadlysecussellysharpsheershilyshortshylysillysincesleekslylysmallso-sosoundspangsrslystarkstillstonestoursupertallytantotherethicktighttodaytomoztrulytwiceunderutterverrywanlywetlywherewrongwrylyabaftaboonaboutaboveadownaforeafteralongaloofamongbelowcircacrossfurthminusneathroundsincespiteunderuntilaarghadieuadiosalackalohaavastbakawbastabegadblessbligebravabravobringchookdammedildodittofrickfudgegollygratzhallohastahavochellahellohowayhowdyhullohuzzajesuskapowlooselordymarrymercynightplonkpsychquitesalveskoalsniffsooeytherethiamthwaptoughtwirpviolavivatwackowaheywhistwilmawirrawoopswowieyecchyeehayeeshyowchzowie"
let trust = mustbereal.match(/.{1,5}/g)
console.log(trust)
// let trustF = trust.toLowerCase();
// console.log(wordChoices.join(' '));
var wordThing = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let word = wordThing.toLowerCase();


var array = word.split("");
// console.log(array);
var arrayAnswer;
var a = 0;
var b = 0;
var c;

function yes() {
    document.getElementById("userinput").focus();

}

function userword() {
    window.thing = document.getElementById("userinput").nodeValue;
    console.log(thing)
}




 function keylog() {
    document.getElementById(`userinput`).onkeydown = function(a) {
        var av = a || event;
        if (av.keyCode == 13) {
            userword()
        }
    }
}

function qasker() {
    // question asker 
    // window.askFirst = prompt(`Guess`)
    window.arrayAnswer = thing.split("")
    window.checker = trust.indexOf(ask)


}
        


function clogic() {
    for (let i = 0; i < 5; i++) {
        if (checker == -1) {
            break;
        } else if (arrayAnswer[i] == array[i]) {
            console.log(`Letter ${arrayAnswer[i]} was correct. It is in the right spot.`)
        } else if (arrayAnswer[i] != array[i]) {
            var wrongSpot = array.indexOf(arrayAnswer[i])


            if (wrongSpot == -1) {

                console.log(`Letter ${arrayAnswer[i]} was entirely incorrect.`)
            } else {
                var wrongSpot = array.indexOf(arrayAnswer[i])

                console.log(`letter ${arrayAnswer[i]} is in the wrong spot.`)
            }
        }
    }

}
function wlogic() {
    if (checker == -1){
        alert(`Type a real, 5 letter word`)
        a--;
    }
}

function counter() {
    if (checker == -1) {
        b--
    }
    if (b < 6 ) {
        b++;
        console.log(`It has been ${b} turns.`)
        
        console.log(b)
    }
    if (b == 6) {
        console.log(`It has been ${b} turns. The correct word was ${word}`)
    }
    

    
    
}

function start() {
    for (let c = 0; c < 6; c++) {
        qasker()
        clogic()
        wlogic()
        counter()
        if (checker == -1 ){
            c--
        }
    }
    
}

start()
            
            
            
            
         
        
        



