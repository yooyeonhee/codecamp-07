import * as S from "../../../../styles/emotion_detail"
import {gql, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

const FETCH_BOARD = gql
`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            likeCount
            dislikeCount
            createdAt
        }
    }
`

export default function DetailPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.number}
    })
    console.log(router.query)
    console.log(data)

    return(
        <S.Body>
            <S.Wrapper>
                <S.Board>
                    <S.BoardWrapper>
                        <S.BoardHeader>
                            <S.BoardInfo>
                                <S.ProfileImg>
                                    <S.PersonalImg src="/detail/profile.png"></S.PersonalImg>
                                </S.ProfileImg>
                                <S.InfoWrapper>
                                    <S.InfoWriter>{data? data.fetchBoard.writer : "loading"}</S.InfoWriter>
                                    <S.InfoCreate>Date : {data? data.fetchBoard.createdAt : "loading"}</S.InfoCreate>
                                </S.InfoWrapper>
                            </S.BoardInfo>
                            <S.BoardFunction>
                                <S.linkImg src="/detail/link.png"/>
                                <S.locationImg src="/detail/location.png"/>
                            </S.BoardFunction>

                        </S.BoardHeader>
                        <S.ContentTitle>{data? data.fetchBoard.title : "loading..."}</S.ContentTitle>
                        <S.ContentImg src="/detail/img.png"/>
                        <S.Content>{data? data.fetchBoard.contents : "loading"}</S.Content>
                        <S.VideoArea>
                            <S.Video src="/detail/video.png"></S.Video>
                        </S.VideoArea>
                        <S.ContentEvaluationArea>
                            <S.ContentEvaluation>
                                <S.LIkeWrapper>
                                    <S.LikeImg src="/detail/like.png"/>
                                    <S.LikeCount>{data? data.fetchBoard.likeCount : "loading"}</S.LikeCount>
                                </S.LIkeWrapper>
                                <S.DisLIkeWrapper>
                                    <S.DisLikeImg src="/detail/dislike.png"></S.DisLikeImg>
                                    <S.DisLikeCount>{data? data.fetchBoard.dislikeCount : "loading"}</S.DisLikeCount>
                                </S.DisLIkeWrapper>
                            </S.ContentEvaluation>
                        </S.ContentEvaluationArea>
                    </S.BoardWrapper>

                </S.Board>
                <S.FunctionButtonArea>
                    <S.ButtonWrapper>
                        <S.FunctionButton>목록으로</S.FunctionButton>
                        <S.FunctionButton>수정하기</S.FunctionButton>
                        <S.FunctionButton>삭제하기</S.FunctionButton>
                    </S.ButtonWrapper>
                </S.FunctionButtonArea>
                <S.CommentArea>
                    <S.CommentInputWrapper>
                        <S.CommentTitle>
                            <S.CommentTitleIcon src="/detail/comment.png"/>
                            댓글
                        </S.CommentTitle>
                        <S.CommentInput>
                            <S.CommentInputInfo>
                                <S.Writer type = "text" placeholder="작성자"></S.Writer>
                                <S.Password type = "text" placeholder="비밀번호"></S.Password>
                                <S.Star>
                                    <img src="/detail/star.png"/>
                                    <img src="/detail/star.png"/>
                                    <img src="/detail/star.png"/>
                                    <img src="/detail/star.png"/>
                                    <img src="/detail/star.png"/>
                                </S.Star>
                            </S.CommentInputInfo>
                            <S.CommentWrite>
                                <S.CommentWriteText type = "text" placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 
                                불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></S.CommentWriteText>
                                <S.CommentWriteSubmit>
                                    <S.CommentWriteTextCount>0/100</S.CommentWriteTextCount>
                                    <S.CommentWriteSubmitButton>등록하기</S.CommentWriteSubmitButton>
                                </S.CommentWriteSubmit>
                            </S.CommentWrite>
                        </S.CommentInput>
                    </S.CommentInputWrapper>
                    <S.CommentShowArea>
                        <S.CommentShowWrapper>
                            <S.CommentProfileImg>
                                <S.PersonalImg src="/detail/profile.png"></S.PersonalImg>
                            </S.CommentProfileImg>
                            <S.CommentShowInfo>
                                <S.CommentShowLIne1>
                                    <S.CommentShowName>노원두
                                        <S.Star>
                                            <img src="/detail/ystar.png"/>
                                            <img src="/detail/ystar.png"/>
                                            <img src="/detail/ystar.png"/>
                                            <img src="/detail/ystar.png"/>
                                            <img src="/detail/star.png"/>
                                        </S.Star>
                                    </S.CommentShowName>
                                    <S.CommentShowOption>
                                        <S.ModifyIcon src="/detail/modify.png"></S.ModifyIcon>
                                        <S.DeleteIcon src="/detail/delete.png"></S.DeleteIcon>
                                    </S.CommentShowOption>
                                </S.CommentShowLIne1>
                                <S.CommentShowLIne2>
                                    진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!
                                </S.CommentShowLIne2>
                                <S.CommentShowLIne3>
                                    2021.02.22
                                </S.CommentShowLIne3>
                            </S.CommentShowInfo>
                        </S.CommentShowWrapper>
                        {/* 다음 댓글이 나타나는 화면을 확인하기 위한 copy 코드 */}
                        <S.CommentShowWrapper>
                            <S.CommentProfileImg>
                                <S.PersonalImg src="/detail/profile.png"></S.PersonalImg>
                            </S.CommentProfileImg>
                            <S.CommentShowInfo>
                                <S.CommentShowLIne1>
                                    <S.CommentShowName>땅찌
                                        <S.Star>
                                            <img src="/detail/ystar.png"/>
                                            <img src="/detail/ystar.png"/>
                                            <img src="/detail/ystar.png"/>
                                            <img src="/detail/star.png"/>
                                            <img src="/detail/star.png"/>
                                        </S.Star>
                                    </S.CommentShowName>
                                    <S.CommentShowOption>
                                        <S.ModifyIcon src="/detail/modify.png"></S.ModifyIcon>
                                        <S.DeleteIcon src="/detail/delete.png"></S.DeleteIcon>
                                    </S.CommentShowOption>
                                </S.CommentShowLIne1>
                                <S.CommentShowLIne2>
                                    진짜 좋네요~ 감사합니다.
                                </S.CommentShowLIne2>
                                <S.CommentShowLIne3>
                                    2021.02.22
                                </S.CommentShowLIne3>
                            </S.CommentShowInfo>
                        </S.CommentShowWrapper>
                    </S.CommentShowArea>
                </S.CommentArea>
            </S.Wrapper>
        </S.Body>
    )
}