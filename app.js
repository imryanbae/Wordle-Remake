var words = "AdmitAdoptAgreeAllowAlterApplyArgueAriseAvoidBeginBlameBreakBringBuildBurstCarryCatchCauseCheckClaimCleanClearClimbCloseCountCoverCrossDanceDoubtDrinkDriveEnjoyEnterExistFightFocusForceGuessImplyIssueJudgeLaughLearnLeaveLet’sLimitMarryMatchOccurOfferOrderPhonePlacePointPressProveRaiseReachReferRelaxServeShallShareShiftShootSleepSolveSoundSpeakSpendSplitStandStartStateStickStudyTeachThankThinkThrowTouchTrainTreatTrustVisitVoiceWasteWatchWorryWouldWriteAbuseAdultAgentAngerAppleAwardBasisBeachBirthBlockBloodBoardBrainBreadBreakBrownBuyerCauseChainChairChestChiefChildChinaClaimClassClockCoachCoastCourtCoverCreamCrimeCrossCrowdCrownCycleDanceDeathDepthDoubtDraftDramaDreamDressDrinkDriveEarthEnemyEntryErrorEventFaithFaultFieldFightFinalFloorFocusForceFrameFrankFrontFruitGlassGrantGrassGreenGroupGuideHeartHenryHorseHotelHouseImageIndexInputIssueJapanJonesJudgeKnifeLauraLayerLevelLewisLightLimitLunchMajorMarchMatchMetalModelMoneyMonthMotorMouthMusicNightNoiseNorthNovelNurseOfferOrderOtherOwnerPanelPaperPartyPeacePeterPhasePhonePiecePilotPitchPlacePlanePlantPlatePointPoundPowerPressPricePridePrizeProofQueenRadioRangeRatioReplyRightRiverRoundRouteRugbyScaleSceneScopeScoreSenseShapeShareSheepSheetShiftShirtShockSightSimonSkillSleepSmileSmithSmokeSoundSouthSpaceSpeedSpiteSportSquadStaffStageStartStateSteamSteelStockStoneStoreStudyStuffStyleSugarTableTasteTerryThemeThingTitleTotalTouchTowerTrackTradeTrainTrendTrialTrustTruthUncleUnionUnityValueVideoVisitVoiceWasteWatchWaterWhileWhiteWholeWomanWorldYouth"
let wordChoices = words.match(/.{1,5}/g);
var mustbereal = "abuseadultagentangerappleawardbasisbeachbirthblockbloodboardbrainbreadbreakbrownbuyercausechainchairchestchiefchildchinaclaimclassclockcoachcoastcourtcovercreamcrimecrosscrowdcrowncycledancedeathdepthdoubtdraftdramadreamdressdrinkdriveearthenemyentryerroreventfaithfaultfieldfightfinalfloorfocusforceframefrankfrontfruitglassgrantgrassgreengroupguidehearthenryhorsehotelhouseimageindexinputissuejapanjonesjudgeknifelauralayerlevellewislightlimitlunchmajormarchmatchmetalmodelmoneymonthmotormouthmusicnightnoisenorthnovelnurseofferorderotherownerpanelpaperpartypeacepeterphasephonepiecepilotpitchplaceplaneplantplatepointpoundpowerpresspriceprideprizeproofqueenradiorangeratioreplyrightriverroundrouterugbyscalescenescopescoresenseshapesharesheepsheetshiftshirtshocksightsimonskillsleepsmilesmithsmokesoundsouthspacespeedspitesportsquadstaffstagestartstatesteamsteelstockstonestorestudystuffstylesugartabletasteterrythemethingtitletotaltouchtowertracktradetraintrendtrialtrusttruthuncleunionunityvaluevideovisitvoicewastewatchwaterwhilewhitewholewomanworldyouthalconaughthellaone’soughtthametherethinethinewherewhichwhosewhosoyoursyoursadmitadoptagreeallowalterapplyargueariseavoidbeginblamebreakbringbuildburstcarrycatchcausecheckclaimcleanclearclimbclosecountcovercrossdancedoubtdrinkdriveenjoyenterexistfightfocusforceguessimplyissuejudgelaughlearnleavelet’slimitmarrymatchoccurofferorderphoneplacepointpressproveraisereachreferrelaxserveshallshareshiftshootsleepsolvesoundspeakspendsplitstandstartstatestickstudyteachthankthinkthrowtouchtraintreattrustvisitvoicewastewatchworrywouldwriteaboveacutealivealoneangryawareawfulbasicblackblindbravebriefbroadbrowncheapchiefcivilcleanclearclosecrazydailydirtyearlyemptyequalexactextrafaintfalsefifthfinalfirstfreshfrontfunnygiantgrandgreatgreengrosshappyharshheavyhumanidealinnerjointlargelegallevellightlocallooseluckymagicmajorminormoralnakednastynavalotherouterplainprimepriorproudquickquietrapidreadyrightromanroughroundroyalruralsharpsheershortsillysixthsmallsmartsolidsorrysparesteepstillsupersweetthickthirdtighttotaltoughupperupseturbanusualvaguevalidvitalwhitewholewrongyoungaforeafterbotheothersinceslashuntilwherewhileabackabaftaboonaboutaboveacceladownafootaforeafoulafteragainagapeagogoagoneaheadahullalifealikealinealoftalonealongaloofaloudamissamplyamuckapaceapartaptlyarearasideaskewawfulbadlyballybelowcannycheapcleanclearcoylydailydimlydirtydittodrilydrylydullyearlyextrafalsefatlyfeylyfirstfitlyforteforthfreshfullyfunnygailygaylygodlygreathaplyheavyhellahencehotlyicilyinfraintl.jildijollylaxlylentolightlowlymadlymaybenevernewlynoblyoddlyoftenotheroughtpartypianoplainplonkplumbpriorqueerquickquiteramenrapidredlyrightroughroundsadlysecussellysharpsheershilyshortshylysillysincesleekslylysmallso-sosoundspangsrslystarkstillstonestoursupertallytantotherethicktighttodaytomoztrulytwiceunderutterverrywanlywetlywherewrongwrylyabaftaboonaboutaboveadownaforeafteralongaloofamongbelowcircacrossfurthminusneathroundsincespiteunderuntilaarghadieuadiosalackalohaavastbakawbastabegadblessbligebravabravobringchookdammedildodittofrickfudgegollygratzhallohastahavochellahellohowayhowdyhullohuzzajesuskapowlooselordymarrymercynightplonkpsychquitesalveskoalsniffsooeytherethiamthwaptoughtwirpviolavivatwackowaheywhistwilmawirrawoopswowieyecchyeehayeeshyowchzowietirescloud"
let trust = mustbereal.match(/.{1,5}/g)
console.log(trust)
var greenArr = []

// let trustF = trust.toLowerCase();
// console.log(wordChoices.join(' '));
var wordThing = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let word = wordThing.toLowerCase();
var win = 0;
console.log(word)
document.getElementById(`userinput`).focus()

var array = word.split("");
// console.log(array);
var arrayAnswer;
var a = 0;
var b = 0;
var c;
var z = 0;
var y = 0;
function yes() {
    document.getElementById("userinput").focus();

}


var colorRow = 1;
var colorColumn = 1;




function userword() {
    window.thing = document.getElementById("userinput").nodeValue;
    return thing;
    console.log(thing)
}

function yes() {
    document.getElementById("userinput").focus();

}


var inputarray = [];

var key;
var finalword
var counterthing = 0;
let timeout = 1;
var activeThing
var activeRow = 1;
var activeColumn = 1;
function reset() {
    document.getElementById(`userinput`).value = ``;
}

document.getElementById(`userinput`).onkeyup = function (z) {

    
    if (z.keyCode >= 65 && z.keyCode <= 90 && z.keyCode != 13 && z.keyCode != 8 && win != 1) {
        if (inputarray.length > 5) {
            inputarray.pop()
        } else if (inputarray.length < 5) {
            key = document.getElementById("userinput").value

            if (key == ``) {
            } else {
                inputarray.push(key)
                reset()
                console.log(inputarray)
            }
            if (activeColumn <= 5 && key != ``) {
                activeThing = document.getElementById(`${activeRow}${activeColumn}`)
                activeThing.children[0].innerHTML = key.toUpperCase();
                
                activeColumn++;
            } 
        }

    }
    if (z.keyCode == 8 && win != 1) {
        inputarray.pop(``);
        document.getElementById(`userinput`).value = ``;
        console.log(inputarray)
        if (activeColumn > 1) {
            activeColumn--
            activeThing = document.getElementById(`${activeRow}${activeColumn}`)

            activeThing.children[0].innerHTML = "";
            console.log(`active column = ${activeColumn}`)

        }


        
    }
    if (inputarray.length == 5 && z.keyCode == 13 && b < 6 && win != 1) {
        window.finalword = inputarray.join(``)
        console.log(finalword)
<<<<<<< HEAD
        
=======
        inputarray = []
>>>>>>> 7a092112a833d9173cceba57da4f9cc919b2aeb7
        colorColumn = 1;

        if (trust.indexOf(finalword) != -1) {
            activeRow++;
            activeColumn = 1;
            counterthing++;
            inputarray = []
        } else if (trust.indexOf(finalword) == -1) {
            colorRow--;
        }
            

       
        z = 1;
        start();


    }

    
}

function qasker() {
    // question asker 
    // window.askFirst = prompt(`Guess`)
    window.checker = trust.indexOf(finalword)
    console.log(checker)
    window.arrayAnswer = finalword.split("")
    z = 0;
    
    
    


}

function clogic() {
    var element = document.getElementById(`${colorRow}${colorColumn}`)
    console.log(colorRow)
    console.log(colorColumn)

    for (let i = 0; i < 5; i++) {
        if (checker == -1) {
            break;
        } else if (arrayAnswer[i] == array[i]) {
            element.style.backgroundColor = "#96d4a7"
            colorColumn++
            greenArr.push(arrayAnswer[i])
            console.log(greenArr)
            console.log(`Letter ${arrayAnswer[i]} was correct. It is in the right spot.`)
        } else if (arrayAnswer[i] != array[i]) {
            var wrongSpot = array.indexOf(arrayAnswer[i])


            if (wrongSpot == -1) {
                element.style.backgroundColor = "#f5706c"
                colorColumn++
                console.log(`Letter ${arrayAnswer[i]} was entirely incorrect.`)
            } else {
                var wrongSpot = array.indexOf(arrayAnswer[i])

                element.style.backgroundColor = "#d0d658"
                colorColumn++
                
                console.log(`letter ${arrayAnswer[i]} is in the wrong spot.`)
            }
        }
        element = document.getElementById(`${colorRow}${colorColumn}`)
        
    }
    colorRow++

}

function wlogic() {
    if (checker == -1) {
        alert(`Type a real, 5 letter word`)
        a--;
    }
}

function counter() {
    if (checker == -1) {
        b--
    } else if (b < 6) {
        b++;
        console.log(`It has been ${b} turns.`)

        console.log(b)
    } else if (b == 6) {
        console.log(`It has been ${b} turns. The correct word was ${word}`)
    }




}

function start() {
            if (word == finalword) {
                console.log(`you win!`)
                for (let g = 0; g < 6; g++) {
                    document.getElementById(`${colorRow}${colorColumn}`).style.backgroundColor = "#96d4a7"
                    colorColumn++
                    win = 1;
                    
                }
                
                y = 1;

            } else if (y != 1) {
                    qasker()
                clogic()
                wlogic()
                // counter()
                if (checker == -1) {
                    console.log(`It has been ${b} turns.`)

                } else if (b < 6) {
                    b++;
                    console.log(`It has been ${b} turns.`)
            
                    console.log(b)
                } else if (b == 6) {
                    console.log(`It has been ${b} turns. The correct word was ${word}`)
                }
            }
    

            

           

            
        

  

    
        
            
        
    
    

}













