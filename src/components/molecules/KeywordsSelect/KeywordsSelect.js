import React from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import {
  StyledKeywordsSuggest,
  Wrapper,
  StyledKeywordElement,
  StyledKeywordList,
  StyledKeywordListItem,
  StyledDeleteKeyword,
  StyledKeyword,
} from "./KeywordsSlecet.styles";

import { MdClose } from "react-icons/md";

const KeywordsSelect = (props) => {
  return (
    <>
      <Wrapper>
        <LabeledInput
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          autoComplete="off"
          {...props}
        />
        <StyledKeywordsSuggest>
          {props.suggestedKeywords.map((keyword, index) => {
            return (
              <StyledKeywordElement
                key={index}
                onClick={(e) => props.handleKeywordClick(keyword, e)}
              >
                {keyword}
              </StyledKeywordElement>
            );
          })}
        </StyledKeywordsSuggest>
      </Wrapper>
      {props.selectedKeyword?.length > 0 && (
        <StyledKeywordList>
          {props.selectedKeyword.map((keyword, index) => {
            return (
              <StyledKeywordListItem key={index}>
                <StyledKeyword>{keyword}</StyledKeyword>
                <StyledDeleteKeyword
                  onClick={() => props.deleteKeyword(keyword)}
                >
                  <MdClose />
                </StyledDeleteKeyword>
              </StyledKeywordListItem>
            );
          })}
        </StyledKeywordList>
      )}
    </>
  );
};

export default KeywordsSelect;
